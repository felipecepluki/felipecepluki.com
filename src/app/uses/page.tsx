import { List } from "@/components/List"

export const metadata = {
  title: 'Uses | Felipe Cepluki',
  description: 'Bem-vindo ao meu site pessoal 👨‍💻',
}

export default function Uses() {
  return (
    <div className="w-full h-full ml-20 mt-20 bg-purpledark">
      <h2 className="font-stretchpro text-white">DDesktop</h2>
      <ul className="">
        <List link="https://pop.system76.com/" title="POP OS 22.04 LTS" description="The best distro linux" />
        <List link="" title="SAMSUNG NOTEBOOK" description="16GB of RAM and 250GB of SSD" />
        <List link="https://www.redragon.com.br/surara-pro" title="SURARA PRO" description="Optical Keyboard of Redragon. The best keyboard" />
        <List link="https://www.redragon.com.br/cobra" title="MOUSE REDRAGON COBRA" description="Most popular mouse, RGB" />
      </ul>
      <h2 className="font-stretchpro mt-20 text-white">CCoding</h2>
      <ul>
        <List link="https://code.visualstudio.com/" title="VSCODE" description="The best editor of the all times" />
        <List link="https://draculatheme.com/pro" title="DRACULA PRO" description="The best theme for developers" />
        <List link="https://insomnia.rest/" title="INSOMNIA" description="The best way to test APIs" />
        <List link="https://httpie.io/" title="HTTPIE" description="The best way to test APIs by the terminal" />
        <List link="https://developer.android.com/studio" title="ANDROID STUDIO" description="Emulator of mobile android to test Apps" />
      </ul>
      <h2 className="font-stretchpro mt-20 text-white">Teerminal</h2>
      <ul>
        <List link="https://hyper.is/" title="HYPER" description="The best terminal - made in electron, highly customizable" />
        <List link="https://ohmyz.sh/" title="OHMYZSH" description="An collection of plugins of ZSH" />
      </ul>
      <h2 className="font-stretchpro mt-20 text-white">Apps</h2>
      <ul>
        <List link="https://www.kaspersky.com.br/password-manager" title="KASPERSKY PASSWORD MANAGER" description="The best password manager" />
        <List link="https://www.notion.so/" title="NOTION" description="The best app to organize the entire life" />
        <List link="https://obsidian.md/" title="OBSIDIAN" description="The best app to take notes in markdown" />
        <List link="https://open.spotify.com/" title="SPOTIFY" description="The best streaming of music" />
        <List link="https://discord.com/" title="DISCORD" description="The best app to talk with friends" />
        <List link="https://figma.com/" title="FIGMA" description="The best design app (and is free)" />
        <List link="https://grammarly.com/" title="GRAMMARLY" description="A must-have tool for non-native English speakers" />
        <List link="https://www.forestapp.cc/" title="FOREST" description="The best time manager to use techniques like pomodoro" />
        <List link="https://www.teleparty.com/" title="TELEPARTY" description="The app i use to watch with my girlfriend" />
        <List link="https://www.colorzilla.com/" title="COLORZILLA" description="The best color picker of web" />
        <List link="https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm" title="WHATFONT" description="The best app to discover fonts of all websites" />
        <List link="https://fakefiller.com/" title="FAKE FILLER" description="The best app to test forms" />
        <List link="https://darkreader.org/" title="DARK READER" description="The best theme for dark mode in browser" />
        <List link="https://www.speedtest.net/" title="SPEEDTEST" description="The best to test the connection of your internet" />
        <List link="https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=pt-BR" title="JSON VIEWER" description="The best app to view JSON in the browser" />
      </ul>
      <h2 className="font-stretchpro mt-20 text-white">SServices</h2>
      <ul className="mb-10">
        <List link="https://vercel.com/" title="VERCEL" description="I hosted here all of my applications" />
        <List link="https://firebase.google.com/?hl=pt" title="FIREBASE" description="Most complete service of Google for simple Apps" />
        <List link="https://domains.google/" title="GOOGLE DOMAINS" description="I buy all my domains here" />
      </ul>
    </div>
  )
}