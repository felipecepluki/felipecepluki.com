import Social from "./components/social";
import Profile from "./assets/images/profile.png";
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
            <p className="text-white text-center font-strech text-3xl mt-2">
              Developer Front-End
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
          <p className="text-white text-justify font-unbounded text-base">
            Sou o Felipe Cepluki. Tenho 17 anos, e sou Desenvolvedor Front-End.
            Comecei a trabalhar com programação em 2020, com o início do meu
            Técnico em Informática. Faço faculdade de Defesa Cibernética. Sou
            entusiasta de Design e Cibersegurança.
          </p>
        </div>
      </div>
      <div
        id="skills"
        className="w-full h-screen items-center justify-center flex flex-col"
      >
        <h1 className="text-white font-extrabold font-strech text-3xl">
          SSkills
        </h1>
      </div>
      <div
        id="projects"
        className="w-full h-screen items-center justify-center flex sm:px-2"
      >
        <table className="sm:pt-10 sm:pr-10 sm:pl-10 overflow-x-auto overflow-y-visible">
          <thead>
            <tr className="bg-purplemedium">
              <th className="text-white font-unbounded border-r-[1px] border-r-[#c1c3d1] sm:text-xs lg:text-base">
                Nome
              </th>
              <th className="text-white font-unbounded border-r-[1px] border-r-[#c1c3d1] sm:text-xs lg:text-base">
                Descrição
              </th>
            </tr>
          </thead>
          {isFetching && (
            <p className="font-bold text-lg text-white">Carregando...</p>
          )}
          {data?.map((repo) => {
            return (
              <tr>
                <th className="text-white font-unbounded border-r-[1px] border-r-[#c1c3d1] sm:text-xs lg:text-base">
                  <a href={repo.html_url}>{repo.full_name}</a>
                </th>
                <th className="text-white font-unbounded border-r-[1px] border-r-[#c1c3d1] sm:text-xs lg:text-base">
                  {repo.description}
                </th>
              </tr>
            );
          })}
        </table>
      </div>
      <div
        id="contact"
        className="w-full h-screen items-center justify-center flex flex-col"
      >
        <h1 className="text-white font-extrabold font-strech text-3xl">
          CContato
        </h1>
        <form className="w-full flex flex-col items-center pt-2">
          <input
            type="text"
            placeholder="Seu nome completo"
            className="w-1/3 p-1 rounded-md bg-transparent outline-none text-white caret-purple font-unbounded placeholder:font-unbounded placeholder:text-gray-500"
            minLength={10}
            maxLength={50}
          />
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="w-1/3 mt-2 p-1 rounded-md bg-transparent outline-none text-white caret-purple font-unbounded placeholder:font-unbounded placeholder:text-gray-500"
            maxLength={35}
          />
          <input
            type="text"
            placeholder="Assunto da mensagem"
            className="w-1/3 mt-2 p-1 rounded-md bg-transparent outline-none text-white caret-purple font-unbounded placeholder:font-unbounded placeholder:text-gray-500"
          />
          <textarea
            placeholder="Sua mensagem"
            className="w-1/3 mt-2 p-1 rounded-md bg-transparent outline-none text-white caret-purple resize-none font-unbounded placeholder:font-unbounded placeholder:text-gray-500"
          />
          <button className="bg-purple rounded-md w-1/3 p-1 text-white font-unbounded">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
