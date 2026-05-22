import type {Joke} from "../../types.ts";
import {useState} from "react";
import JokeList from "../../components/JokeList/JokeList.tsx";
import "./JokesApi.css";
import Button from "../../shared/Button/Button.tsx";

const JokesApi = () => {

  const [jokes, setJokes] = useState<Joke[]>([
    {id: "1", value: "Joke 1"},
    {id: "2", value: "Joke 2"},
    {id: "3", value: "Joke 3"},
  ]);


  return (
    <div>

      <div className="button-wrapper">
        <h2 className="jokes-title">Chuck Norris jokes</h2>
        <Button className="right-btn">
          New Jokes
        </Button>
      </div>
      <JokeList jokes={jokes} />

    </div>
  );
};

export default JokesApi;