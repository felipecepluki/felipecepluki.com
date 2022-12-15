import { useQuery } from "react-query";
import axios from "axios";

type Repository = {
  full_name: string;
  description: string;
  html_url: string;
};

export function Projects() {
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
    <div className="flex h-screen bg-purpledark">
      <main className="flex flex-col h-full w-full bg-green-500 justify-around">
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
              <strong className="text-white underline underline-offset-2 font-jetbrains uppercase">
                {repo.full_name}
              </strong>
              <p className="text-white font-sans">{repo.description}</p>
            </a>
          );
        })}
      </main>
    </div>
  );
}
