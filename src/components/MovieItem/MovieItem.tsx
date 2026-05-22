import type {FC} from "react";
import "./MovieItem.css";

interface MovieItemProps {
  id: string;
  name: string;
  onEditMovie: (id: string, newName: string) => void;
  onDeleteMovie: (id: string) => void;
}

const MovieItem: FC<MovieItemProps> = (props) => {
  const {id, name, onEditMovie, onDeleteMovie} = props;
  return (
    <div className="movie-item">
      <input
        type="text"
        className="movie-edit-input"
        value={name}
        onChange={(e) => onEditMovie(id, e.target.value)}
      />
      <button
        type="button"
        className="movie-delete-btn"
        onClick={() => onDeleteMovie(id)}
      >
        <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
  );
};

export default MovieItem;