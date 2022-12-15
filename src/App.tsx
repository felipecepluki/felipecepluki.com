import Social from "./components/social";
import Profile from "./assets/images/profile.png";
import LopeseSantos from "./assets/images/lopesesantos.png";
import { CheckCircle } from "phosphor-react";
import { useQuery } from "react-query";
import axios from "axios";
import Navbar from "./components/Navbar";

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
    <div className="h-full bg-purpledark">
      <header className="fixed">
        <Navbar />
      </header>
      <div id="initial" className="h-screen w-full">
        <main className="flex h-screen w-full sm:flex-col lg:flex-row">
          <div className="sm:w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
            <div className="flex mt-20 items-center justify-center overflow-hidden sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] border-4 border-white bg-slate-500 rounded-full">
              <img src={Profile} className="sm:w-[300px] lg:w-[400px]" />
            </div>
            <div className="flex flex-row sm:w-[400px] lg:w-1/2 p-2 justify-between">
              <Social />
            </div>
          </div>
          <div className="sm:w-full lg:w-1/2 flex flex-col items-center justify-center p-2 h-full">
            <p className="text-white text-6xl text-center font-strech underline-title">
              feelipe Ceepluki
            </p>
            <p className="text-white font-strech text-3xl mt-2">
              developer front-end
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
        <div className="sm:w-ful sm:p-4 lg:w-1/4">
          <p className="text-white text-justify font-unbounded text-base">
            Sou o Felipe Cepluki. Tenho 17 anos, e sou{" "}
            <strong className="underline underline-offset-2">
              Developer Front-End
            </strong>
            , ou seja, cuido da parte visual de aplicações web, a parte que os
            usuários veem. Antes de descobrir a tecnologia, queria ser artista,
            no entanto, eu estou realizando esse sonho através da programação,
            porque{" "}
            <strong className="underline underline-offset-2">
              programação é uma arte
            </strong>
            .{" "}
          </p>
        </div>
        <div className="sm:w-full sm:pl-4 lg:w-1/4 pt-2 items-center justify-start flex flex-row">
          <CheckCircle size={32} color="#9f86c0" />
          <p className="ml-1 text-white font-unbounded">
            Professional Services
          </p>
        </div>
        <div className="sm:w-full sm:pl-4 lg:w-1/4 pt-2 items-center justify-start flex flex-row">
          <CheckCircle size={32} color="#9f86c0" />
          <p className="ml-1 text-white font-unbounded">Design Skills</p>
        </div>
        <div className="sm:w-full sm:pl-4 lg:w-1/4 pt-2 items-center justify-start flex flex-row">
          <CheckCircle size={32} color="#9f86c0" />
          <p className="ml-1 text-white font-unbounded">
            3 anos de Experiência como Developer
          </p>
        </div>
        <div className="sm:w-full sm:pl-4 lg:w-1/4 pt-2 items-center justify-start flex flex-row">
          <CheckCircle size={32} color="#9f86c0" />
          <p className="ml-1 text-white font-unbounded">
            Experiência em tecnologias atuais
          </p>
        </div>
        <div className="sm:w-full sm:pl-4 lg:w-1/4 pt-2 items-center justify-start flex flex-row">
          <CheckCircle size={32} color="#9f86c0" />
          <p className="ml-1 text-white font-unbounded">
            Habilidade em Escrita e fala
          </p>
        </div>
        <div className="sm:w-full sm:pl-4 lg:w-1/4 pt-2 items-center justify-start flex flex-row">
          <CheckCircle size={32} color="#9f86c0" />
          <p className="ml-1 text-white font-unbounded">
            Aplicações rápidas e responsivas para a web
          </p>
        </div>
      </div>
      <div
        id="portfolio"
        className="flex items-center justify-center bg-purpledark h-screen"
      >
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://lopesesantos.com"
          className="flex flex-col rounded-lg p-2 items-center justify-center card"
        >
          <img src={LopeseSantos} className="" />
        </a>
      </div>
      <div
        id="projects"
        className="flex justify-center flex-col h-screen bg-purpledark"
      >
        {isFetching && (
          <p className="font-bold text-lg text-white">Carregando...</p>
        )}
        {data?.map((repo) => {
          return (
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={repo.html_url}
              key={repo.full_name}
              className="p-2"
            >
              <strong className="text-white underline underline-offset-2 font-unbounded">
                {repo.full_name}
              </strong>
              <p className="text-white font-sans">{repo.description}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default App;
