import { useState, useEffect } from "react";
import axios from "axios";

const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((res) => {
      // console.log(res.data);
      setData(res.data);
      setIsLoading(false);
      console.log(data);
    });
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {/* {data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))} */}
      {/* {data.map((hero) => {
        return (
          <>
            <div key={hero.name}>{hero.name}</div>
            <p>1</p>
          </>
        );
      })} */}
      {data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
};

export default SuperHeroesPage;
