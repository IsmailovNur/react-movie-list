import type {Joke} from "../../types.ts";
import {useCallback, useEffect, useState} from "react";
import JokeList from "../../components/JokeList/JokeList.tsx";
import "./JokesApi.css";
import Button from "../../shared/Button/Button.tsx";
import {JOKES_API_URL, JOKES_COUNT} from "../../constants.ts";
import Loader from "../../shared/Loader/Loader.tsx";

const JokesApi = () => {

  const [jokes, setJokes] = useState<Joke[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const getJokesData = useCallback(async () => {
    setIsLoading(true);
    try {
      const promisesArray = [];
      for (let i = 0; i < JOKES_COUNT; i++) {
        promisesArray.push(fetch(JOKES_API_URL));
      }

      const responses = await Promise.all(promisesArray);
      const jokesData = [];

      for (const res of responses) {
        if (res.ok) {
          const data = await res.json();
          jokesData.push({
            id: data.id,
            value: data.value,
          });
        }
      }

      setJokes(jokesData);
    } catch (error) {
      console.error('Failed to load jokes:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void getJokesData();
  }, [getJokesData]);

  const handleButtonClick = () => {
    void getJokesData();
  };

  return (
    <div>
      <div className="button-wrapper">
        <h2 className="jokes-title">Chuck Norris jokes</h2>

        <Button
          className="right-btn"
          clickHandler={handleButtonClick}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'New Jokes'}
        </Button>

      </div>
      {isLoading ? (<Loader isLoading={isLoading} />) :
        <JokeList jokes={jokes} />}
    </div>
  );
};

export default JokesApi;