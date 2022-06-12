import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroesPage = () => {
  // 2nd argument is function that returns promise
  const { isLoading, data } = useQuery("super-heroes", fetchSuperHeroes);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {data.data?.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
};

export default RQSuperHeroesPage;
