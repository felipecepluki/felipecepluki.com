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
            <p className="text-white text-center font-strech text-3xl mt-2">
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
      </div>
      <div
        id="projects"
        className="w-full h-screen items-center justify-center flex"
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
              <th className="text-white font-unbounded sm:text-xs lg:text-base">
                Link
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
                  {repo.full_name}
                </th>
                <th className="text-white font-unbounded border-r-[1px] border-r-[#c1c3d1] sm:text-xs lg:text-base">
                  {repo.description}
                </th>
                <th className="sm:text-xs lg:text-base">
                  <a href={repo.html_url}>🔗</a>
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
