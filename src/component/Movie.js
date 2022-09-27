import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "../MovieContext";

import { motion } from "framer-motion";


function Movie({ movie }) {
  

  return (
    <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                layout
                className="movie"
                >
                
                <Link to={`/movie/${movie._id}`} key={movie.id}>
                    <div className="shadow"></div>
                </Link>
               
                    <img src={movie.image} />
                
                <h2>{movie.name}</h2>
                {/* <AiOutlinePlayCircle className="position_play"/> */}
                </motion.div>
  );
}

export default Movie;
