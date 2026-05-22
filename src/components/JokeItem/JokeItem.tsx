import {motion} from "framer-motion";
import type {FC} from "react";
import "./JokeItem.css";

interface JokeItemProps {
  value: string;
}

const JokeItem: FC<JokeItemProps> = ({value}) => {
  return (
    <motion.div
      className="joke-item"
      initial={{opacity: 0, x: -30}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, scale: .8}}
      transition={{duration: 0.3}}
    >
      <span>{value}</span>
    </motion.div>
  );
};

export default JokeItem;