import "./JokeList.css";
import type {Joke} from "../../types.ts";
import type {FC} from "react";
import JokeItem from "../JokeItem/JokeItem.tsx";

interface JokeListProps {
  jokes: Joke[];
}

const JokeList: FC<JokeListProps> = ({jokes}) => {
  return (
    <div className="joke-list">
      {jokes.map((joke) => (
        <JokeItem
          key={joke.id}
          value={joke.value}
        />
      ))}
    </div>
  );
};

export default JokeList;