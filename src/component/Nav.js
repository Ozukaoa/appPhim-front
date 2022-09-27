import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { MdOutlineMovieFilter } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

import { AiOutlineStar } from "react-icons/ai";

// import Bootstrap, {
//   NavDropdown,
//   Navbar,
//     Nav,
//     Form,
    
    
//     Button,
    
//   } from 'bootstrap-4-react';

function Nav(){
    return(
      <>
      <div className="panel">
        <div>
          <Link to="/">
           <MdOutlineMovieFilter/></Link>
           <BiMoviePlay/>
           <BsStars/>
           <BiCameraMovie/>
          </div>
          <div>
              <Link to="/home ">
              <FaUserCircle /></Link>
          </div>
      </div>
      </>

      
        
    )
}

export default Nav