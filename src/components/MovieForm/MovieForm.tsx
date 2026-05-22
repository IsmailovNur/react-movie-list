import "./MovieForm.css";
import React, {type FC, useState} from "react";

interface MovieFormProps {
  onAddMovie: (name: string) => void;
}

const MovieForm: FC<MovieFormProps> = ({onAddMovie}) => {
  const [movieName, setMovieName] = useState('');

  const submitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (movieName.trim()) {
      onAddMovie(movieName.trim());
      setMovieName('');
    }
  };

  return (
    <form
      className="movie-form"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        className="movie-input"
        placeholder="Enter movie to add"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <button
        type="submit"
        className="movie-add-btn"
      >
        Add Movie
      </button>
    </form>
  );
};

export default MovieForm;