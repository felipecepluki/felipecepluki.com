import Social from "./components/social";
import { useQuery } from "react-query";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Cpu } from "phosphor-react";

type Repository = {
  full_name: string;
  description: string;
  html_url: string;
};

function App() {
  const { data, isFetching } = useQuery<Repository[]>(
    "repos",
    async () => {
      const response = await axios.get(
        "https://api.github.com/users/felipecepluki/repos"
      );
      return response.data;
    },
    {
      staleTime: 1000 * 60, // 1 minute
    }
  );

  return (
    <div className="h-full overflow-x-hidden bg-purpledark">
      <header className="fixed">
        <Navbar />
      </header>
      <div id="initial" className="h-screen w-full">
        <main className="flex h-screen w-full sm:flex-col lg:flex-row">
          <div className="sm:w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
            <div className="flex mt-28 items-center justify-center overflow-hidden sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] border-4 border-white bg-purplemedium rounded-full">
              <img
                src="https://github.com/felipecepluki.png"
                className="sm:w-full lg:w-full"
                alt="Imagem de Perfil"
              />
            </div>
            <div className="flex flex-row sm:w-[400px] lg:w-[500px] p-4 justify-between">
              <Social />
            </div>
          </div>
          <div className="sm:w-full lg:w-1/2 flex flex-col items-center justify-center p-2 h-full">
            <p className="text-white text-6xl text-center font-strech underline-title">
              feelipe Ceepluki
            </p>
            <p className="text-white text-center font-roboto text-3xl mt-4 uppercase">
              Desenvolvedor Front-End
            </p>
          </div>
        </main>
      </div>
      <div
        id="about"
        className="w-full h-screen items-center justify-center flex flex-col"
      >
        <h1 className="text-white font-extrabold font-strech text-3xl">
          Sobree mim
        </h1>
        <div className="sm:w-full sm:p-4 lg:w-2/3">
          <p className="text-white text-justify font-roboto text-base">
            Sou o Felipe Cepluki. Tenho 17 anos, e sou Desenvolvedor Front-End.
            Comecei a trabalhar com programação em 2020, com o início do meu
            Técnico em Informática. Faço faculdade de Defesa Cibernética. Sou
            entusiasta de Design e Cibersegurança.
          </p>
        </div>
      </div>
      <div
        id="skills"
        className="w-full h-screen items-center justify-center flex flex-col px-2"
      >
        <h1 className="text-white font-extrabold font-strech text-3xl">
          SSkills
        </h1>
        <div className="flex lg:flex-row lg:h-1/3 w-full items-center justify-center sm:flex-col">
          <div className="flex flex-col p-2 mt-2 border-2 border-white lg:w-1/4 lg:h-full sm:w-full sm:h-1/2">
            <h3 className="flex flex-row text-white text-2xl font-roboto uppercase w-full items-center text-center justify-center">
              <Cpu size={48} color="#fff" className="mr-2" />
              Desenvolvimento de Software
            </h3>
            <div className="w-full h-full flex items-center justify-center">
              <p className="font-roboto text-justify text-white">
                Atuo criando diversos tipos de software, nas seguintes
                linguagens de programação: JavaScript, TypeScript e Elixir.
              </p>
            </div>
          </div>
          <div className="flex flex-col p-2 mt-2 lg:border-y-2 border-white lg:w-1/4 lg:h-full sm:w-full sm:border-2 sm:h-1/2">
            <h3 className="flex flex-row text-white text-2xl font-roboto uppercase w-full items-center justify-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                className="h-12 w-12 mr-2"
              />
              Frameworks
            </h3>
            <div className="w-full h-full flex items-center justify-center">
              <p className="font-roboto text-justify text-white">
                Mais de 2 anos de experiência em desenvolvimento com HTML, CSS,
                JS, ReactJs
              </p>
            </div>
          </div>
          <div className="flex flex-col p-2 mt-2 border-2 border-white lg:w-1/4 lg:h-full sm:w-full sm:h-1/2">
            <h3 className="flex flex-row text-white text-2xl font-roboto uppercase w-full items-center justify-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                className="w-12 h-12 mr-2"
              />
              Linux
            </h3>
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-white text-justify font-roboto">
                Mais de 2 anos com experiência de ambiente Linux <br /> * + de
                20 distros Linux diferentes
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="w-full h-screen items-center justify-center flex sm:px-2"
      >
        <table className="sm:pt-10 sm:pr-10 sm:pl-10 overflow-x-auto overflow-y-visible">
          <thead>
            <tr className="bg-purplemedium">
              <th className="text-white font-roboto uppercase border-r-[1px] border-r-[#c1c3d1] sm:text-xs lg:text-base">
                Nome
              </th>
              <th className="text-white font-roboto uppercase border-r-[1px] border-r-[#c1c3d1] sm:text-xs lg:text-base">
                Descrição
              </th>
            </tr>
          </thead>
          {isFetching && (
            <p className="font-bold text-lg text-white">Carregando...</p>
          )}
          {data?.map((repo) => {
            return (
              <tr className="">
                <th className="text-white font-roboto uppercase border-r-[1px] border-r-[#c1c3d1] sm:text-xs lg:text-base">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {repo.full_name}
                  </a>
                </th>
                <th className="text-white font-unbounded border-r-[1px] border-r-[#c1c3d1] sm:text-xs lg:text-base">
                  {repo.description}
                </th>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
