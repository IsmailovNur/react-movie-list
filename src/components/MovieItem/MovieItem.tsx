import type {FC} from "react";
import "./MovieItem.css";
import { motion } from "framer-motion";

interface MovieItemProps {
  id: string;
  name: string;
  onEditMovie: (id: string, newName: string) => void;
  onDeleteMovie: (id: string) => void;
}

const MovieItem: FC<MovieItemProps> = (props) => {
  const {id, name, onEditMovie, onDeleteMovie} = props;
  return (
    <motion.div
      initial={{opacity: 0, x: -30}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, scale: .8}}
      transition={{duration: 0.3}}
      className="movie-item"
    >
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
    </motion.div>
  );
};

export default MovieItem;