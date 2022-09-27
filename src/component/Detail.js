import axios from "axios";
import React, { useState,useEffect } from "react"
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { TbArrowBackUp } from "react-icons/tb";
import "./detail.css"

const Detail =() =>{
    const navigate = useNavigate();
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
    return(
        
            <>
           
            
           
            <img 
            className="img-bg"
            src={ movie.image}
            alt="not find"
             />
            <div className="container d-detail">
             <div className="row">
                    <div className= "  col col-4  " >
                    
                    <img
                    className="d-image"
                    src={ movie.image}
                    alt="not find"/>
                    <div>
                    <Link to={`/watch/${movie._id}`}>
                            <button className="btn1 btn btn-danger">
                                <div> <FaPlay/>Xem Phim  </div></button>
                                </Link>
                          </div>
                    
                    
                   
                    </div>
                    
                    
                            <div className="col col-8 ">
                            <h1>{movie.name}</h1>
                            <h3>Năm Sản Xuất</h3>
                                <h4>{movie.year}</h4>
                            <h3>Thể Loại</h3>
                                    {
                                    movie.category&&movie.category.map((item,index)=>{
                                        console.log(movie)
                                        return(
                                            <h4 key={index}>{item}</h4>
                                        )
                                    })}
                            <h3>Mô tả</h3>
                                    <h4>{movie.describe}</h4>
                                
    
                        </div>
                     
                   
              </div>
              </div>

                   
        </>
    )}
    else {console.log("ko có movie")}
    
}

export default Detail