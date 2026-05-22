import MovieForm from "../../components/MovieForm/MovieForm.tsx";
import type {Movie} from "../../types.ts";
import {useEffect, useState} from "react";
import MovieList from "../../components/MovieList/MovieList.tsx";

import "./MovieApp.css";

const MovieApp = () => {

  const [movies, setMovies] = useState<Movie[]>(() => {
    const savedMovies = localStorage.getItem('MOVIE_LIST');
    return savedMovies ? JSON.parse(savedMovies) : [];
  });

  useEffect(() => {
    localStorage.setItem('MOVIE_LIST', JSON.stringify(movies));
  }, [movies]);

  const addMovieHandler = (name: string) => {
    const newMovie: Movie = {
      id: crypto.randomUUID(),
      name: name,
    };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const editMovieHandler = (id: string, newName: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? {...movie, name: newName} : movie
      )
    );
  };

  const deleteMovieHandler = (id: string) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="MovieApp">
      <MovieForm onAddMovie={addMovieHandler} />

      <h2>Movies list:</h2>

      <MovieList
        movies={movies}
        onEditMovie={editMovieHandler}
        onDeleteMovie={deleteMovieHandler}
      />
    </div>
  );
};

export default MovieApp;