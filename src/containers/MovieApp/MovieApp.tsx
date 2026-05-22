import MovieForm from "../../components/MovieForm/MovieForm.tsx";
import type {Movie} from "../../types.ts";
import {useState} from "react";

const MovieApp = () => {
  const [movies, setMovies] = useState<Movie[]>([
    {id: "1", name: "Movie 1"},
    {id: "2", name: "Movie 2"},
    {id: "3", name: "Movie 3"},
  ]);

  const addMovieHandler = (name: string) => {
    const newMovie: Movie = {
      id: crypto.randomUUID(),
      name: name,
    };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  }

  return (
    <div className="MovieApp">
      <MovieForm onAddMovie={addMovieHandler} />
      {movies.map(movie => (
        <div key={movie.id}>{movie.name}</div>
      ))}
    </div>
  );
};

export default MovieApp;