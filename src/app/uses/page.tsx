import { List } from "@/components/List"

export const metadata = {
  title: 'Uses | Felipe Cepluki',
  description: 'Bem-vindo ao meu site pessoal 👨‍💻',
}

export default function Uses() {
  return (
    <div className="w-full h-full bg-purpledark">
      <h2 className="font-stretchpro text-white">DDesktop</h2>
      <ul className="">
        <List link="https://pop.system76.com/" title="POP OS 22.04 LTS" description="Melhor Distro Linux existente" />
        <List link="" title="NOTEBOOK SAMSUNG" description="16GB de RAM e 250GB de SSD" />
        <List link="https://www.redragon.com.br/surara-pro" title="SURARA PRO" description="Teclado Óptico da Redragon. Melhor teclado existente" />
        <List link="https://www.redragon.com.br/cobra" title="MOUSE REDRAGON COBRA" description="Mouse mais popular da marca, RGB e muito macio" />
      </ul>
      <h2 className="font-stretchpro text-white">CCódigo</h2>
      <ul>
        <List link="https://code.visualstudio.com/" title="VSCODE" description="O melhor editor de código da atualidade" />
        <List link="https://draculatheme.com/pro" title="DRACULA PRO" description="A melhor para programadores" />
        <List link="https://insomnia.rest/" title="INSOMNIA" description="O melhor app para testar APIs" />
        <List link="https://httpie.io/" title="INSOMNIA" description="A melhor forma de testar APIs pelo terminal" />
        <List link="https://developer.android.com/studio" title="ANDROID STUDIO" description="Emulador de dispositivos Android para testar Apps" />
      </ul>
      <h2 className="font-stretchpro text-white">Teerminal</h2>
      <ul>
        <List link="https://hyper.is/" title="HYPER" description="O melhor terminal feito em Electron, altamente customizável" />
        <List link="https://ohmyz.sh/" title="OHMYZSH" description="Uma coleção de plugins do ZSH" />
      </ul>
      <h2 className="font-stretchpro text-white">Apps</h2>
      <ul>
        <List link="https://www.kaspersky.com.br/password-manager" title="KASPERSKY PASSWORD MANAGER" description="O melhor e mais simples gerenciador de senhas que já testei" />
        <List link="https://www.notion.so/" title="NOTION" description="O meu app para organizar a vida" />
        <List link="https://obsidian.md/" title="OBSIDIAN" description="O melhor app para anotar os estudos utilizando Markdown" />
        <List link="https://open.spotify.com/" title="SPOTIFY" description="O melhor app para ouvir música" />
        <List link="https://discord.com/" title="DISCORD" description="O melhor app para falar com os amigos" />
        <List link="https://figma.com/" title="FIGMA" description="O melhor app de design (e é gratuito)" />
        <List link="https://grammarly.com/" title="GRAMMARLY" description="O melhor app para quem não nasceu em um país com lingua inglesa" />
        <List link="https://www.forestapp.cc/" title="FOREST" description="O melhor app para gerenciar o tempo que existe!" />
        <List link="https://www.teleparty.com/" title="TELEPARTY" description="O app que uso para assistir com a minha namorada" />
        <List link="https://www.colorzilla.com/" title="COLORZILLA" description="O melhor color picker da web que existe!" />
        <List link="https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm" title="WHATFONT" description="O melhor app para descobrir fontes de qualquer website" />
        <List link="https://fakefiller.com/" title="FAKE FILLER" description="O melhor app para testar formulários" />
        <List link="https://darkreader.org/" title="DARK READER" description="O app definitivo para dark theme no browser" />
        <List link="https://www.speedtest.net/" title="SPEEDTEST" description="O melhor app para testar sua conexão de internet" />
        <List link="https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=pt-BR" title="JSON VIEWER" description="O melhor app para vizualizar JSON no browser" />
      </ul>
      <h2 className="font-stretchpro text-white">SServiços</h2>
      <ul>
        <List link="https://vercel.com/" title="VERCEL" description="Aqui hospedo todas as minhas aplicações: a melhor!" />
        <List link="https://firebase.google.com/?hl=pt" title="FIREBASE" description="Serviço completo do Google para Apps simples" />
      </ul>
    </div>
  )
}