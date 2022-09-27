import axios from "axios";
import React, { useState,useEffect } from "react"
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { TbArrowBackUp } from "react-icons/tb";
import "./detail.css"

const Watch =() =>{
    
    const param = useParams()
    const id = param.movieId;
   
   
    const [movie,setMovie] = useState({});
    
  

    async function getSingleData(id) {
        try {
            const res = await axios.get(`http://localhost:3000/news/${id}`);
            
              
            setMovie(await{...res.data})
            await console.log(movie)
            
           
            
          
        
            
        } catch (error) {
            
        }
        

    }

    useEffect(()=>{
        getSingleData(param.movieId)
},[])

    // const cat = movie.category
    // const date = movie.createdAt
    // console.log(movie)

    
  
if(movie.name!==undefined){
    console.log(movie)
    const ep = movie.episodes
    return(
        
        <>
                <div className="w-frame">
                <iframe width="80%" height="600px" src="//ok.ru/videoembed/4012313873015" frameborder="0" allow="autoplay" allowFullScreen></iframe>

                {ep.length>1 ?
                        <>
                        <h2>{movie.name} ({movie.year}) - {ep[0].ep_name}</h2> 
                        <br/>
                        <h3>--- Chọn Tập Phim ---</h3>
                    {
                        ep.map((value,index)=>{
                            return(
                                <button className="btn btn-success w-btn">{value.ep_name}</button>
                            )
                        })
                    }</>  :
                    <>
                        <h2>{movie.name} ({movie.year})</h2> 
                    </>

                }
                    
               
                </div>  
                
                
                
           
            
                   
        </>
    )}
    else {console.log("ko có movie")}
    
}



export default Watch
