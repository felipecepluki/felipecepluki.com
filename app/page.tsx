import BooksSection from "@/components/Books";
import InitialSection from "@/components/InitialSection";
import MerchSection from "@/components/MerchSection";
import SportsSection from "@/components/SportsSection";
import VegetarianSection from "@/components/Vegetarian";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col">
        <InitialSection />
        <MerchSection />
        <VegetarianSection />
        <SportsSection />
        <BooksSection />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
