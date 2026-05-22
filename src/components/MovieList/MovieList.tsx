import type {Movie} from "../../types.ts";
import type {FC} from "react";
import MovieItem from "../MovieItem/MovieItem.tsx";

import "./MovieList.css";

interface MovieListProps {
  movies: Movie[];
  onEditMovie: (id: string, newName: string) => void;
  onDeleteMovie: (id: string) => void;
}

const MovieList: FC<MovieListProps> = (props) => {
  const {movies, onEditMovie, onDeleteMovie} = props;
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <h4 className="empty-message">Your Movie list is empty.</h4>
      ) : (
        movies.map((movie) => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            name={movie.name}
            onEditMovie={onEditMovie}
            onDeleteMovie={onDeleteMovie}
          />
        ))
      )}
    </div>
  );
};

export default MovieList;