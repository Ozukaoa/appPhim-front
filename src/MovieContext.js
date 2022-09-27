import axios from "axios";
import { createContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({children}){
    const [movies,setMovies] = useState([]);
    const [filted,setFilted] = useState([]);
    const [header, setHeader] = useState("Trending");
    const getTrendMovie = async () =>{
        const movies = await axios.get(`http://localhost:3000/news`)
       
       
        setMovies(movies.data)
        setFilted(movies.data)
        console.log(movies);
        
    }

    const getSearchMovie = async (query) =>{
        const movies = await axios.get(`http://localhost:3000/news/search/${query}`)
       
       
        setMovies(movies.data)
        setFilted(movies.data)
        setHeader(`Kết quả cho từ khoá"${query}"`)
        console.log(movies);
        
    }



    return (
        <MovieContext.Provider
            value={{
                movies,
                filted,
                setMovies,
                getTrendMovie,
                getSearchMovie
            }}  >
                {children}
            </MovieContext.Provider> 
    );
        }

    export default  MovieContext;