import React,{useContext,useEffect, useState} from "react";
import { RiSearchLine } from "react-icons/ri";
import MovieContext from "../MovieContext";
function Search(){

  const [value, setValue] = useState("");
  const { getTrendMovie, getSearchMovie } = useContext(MovieContext);

  // const onKeyUp = (event) => {
  //   if (event.key === "Enter" && value !== "") {
  //     const query = value.trim();
  //     if (query === "") {
  //       getTrendMovie();
  //     } else {
  //       getSearchMovie(query);
  //       console.log(query)
  //     }
  //     setValue("");
  //   }
  // };

  useEffect(()=>{
    const query = value.trim();
    query === ""?
    getTrendMovie()
    :
    getSearchMovie(query);
  },[value])

    return(
        <div className="search-movies">
      <label htmlFor="search">
        <RiSearchLine />
      </label>
      <input 
      type="text"
       placeholder="Nhập tên Phim"
       id="search"
          // onKeyDown={(e) => onKeyUp(e)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
      />
      </div>
    )
}

export default Search