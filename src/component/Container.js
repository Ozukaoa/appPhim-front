import React from "react";
import MovieList from "./MovieList";
import Search from "./Search";

function Container(){
    return(
        <>
          <div className="container">
            <Search/>

            <MovieList/>

          </div>
        </>
    )
}

export default Container