"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Sprout,
  Dumbbell,
  BookOpen,
  Newspaper,
  Code,
  Shirt,
  Mailbox,
  ExternalLink,
  Binary,
  House,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

type ShortcutActions = Record<
  "ctrl+j" | "ctrl+p" | "ctrl+g" | "ctrl+h" | "ctrl+f" | "ctrl+m" | "ctrl+v" | "ctrl+s" | "ctrl+n" | "ctrl+b" | "ctrl+c",
  () => void
>;

export function Command({ showShortcutText }: { showShortcutText?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    // Mapeia atalhos para ações específicas
    const shortcutActions: ShortcutActions = {
      "ctrl+j": () => setOpen((prev) => !prev),
      "ctrl+p": () => router.push("/contact"),
      "ctrl+g": () => handleShare(),
      "ctrl+h": () => router.push("/"),
      "ctrl+f": () => {
        window.open("https://github.com/felipecepluki/felipecepluki.com", "_blank");
      },
      "ctrl+m": () => router.push("/merch"),
      "ctrl+v": () => router.push("/vegetarian"),
      "ctrl+s": () => router.push("/sports"),
      "ctrl+n": () => router.push("/newsletter"),
      "ctrl+b": () => router.push("/books"),
      "ctrl+c": () => router.push("/code"),
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = `${e.ctrlKey || e.metaKey ? "ctrl" : ""}+${e.key.toLowerCase()}`;
      if (shortcutActions[key as keyof ShortcutActions]) {
        e.preventDefault(); // Previne comportamento padrão do navegador
        shortcutActions[key as keyof ShortcutActions](); // Executa a ação correspondente
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check this out!",
          url: window.location.href,
        })
        .catch((error) => console.error("Error sharing", error));
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  return (
    <>
      {showShortcutText && (
        <p className="text-sm text-muted-foreground">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>J
          </kbd>
        </p>
      )}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => router.push("/contact")}>
              <Mailbox />
              <span>Send mail</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={handleShare}>
              <ExternalLink />
              <span>Share this page</span>
              <CommandShortcut>⌘G</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => {
              window.open("https://github.com/felipecepluki/felipecepluki.com", "_blank");
            }}>
              <Binary />
              <span>View the source code</span>
              <CommandShortcut>⌘F</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Go to">
            <CommandItem onSelect={() => router.push("/")}>
              <House />
              <span>Home</span>
              <CommandShortcut>⌘H</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => router.push("/merch")}>
              <Shirt />
              <span>Merch</span>
              <CommandShortcut>⌘M</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => router.push("/vegetarian")}>
              <Sprout />
              <span>Vegetarian</span>
              <CommandShortcut>⌘V</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => router.push("/sports")}>
              <Dumbbell />
              <span>Sports</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => router.push("/newsletter")}>
              <Newspaper />
              <span>Newsletter</span>
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => router.push("/books")}>
              <BookOpen />
              <span>Books</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => router.push("/code")}>
              <Code />
              <span>Code</span>
              <CommandShortcut>⌘C</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}