import axios from "axios";
import { Link } from "react-router-dom";
import React,{useContext,useEffect, useState} from "react";
import { motion } from "framer-motion";
import MovieContext from "../MovieContext";
import Movie from "./Movie";

const MovieList = () =>{
    const { filted,getTrendMovie} = useContext(MovieContext)

    

    useEffect(()=>{
        getTrendMovie();
        console.log(filted)
    },[])

    // const getCourse = async ()=>{
    //     try {
    //         const res = await axios.get("http://localhost:3000/news")
    //      setData(res.data)
    //      console.log(res.data)
            
    //     } catch (error) {
            
    //     }
        
    // }


        return (
            <>
            {/* {console.log(movies)} */}
             
                <motion.div layout className="popular-movies">
                    {filted&&filted.map((items,index)=>{
                        return<Movie key={index} movie={items}/>
                                })}
                </motion.div>
                            
                        </>
                    )

    }

    export default MovieList;

