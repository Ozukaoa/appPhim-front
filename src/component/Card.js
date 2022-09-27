import { MDBCol } from "mdb-react-ui-kit";
import React from "react";
import './card.css'



function Card(){
    return (
    <>
        
        <div className="card-phim">
            <div className='bg-image hover-overlay hover-zoom hover-shadow' style={{ maxWidth: '22rem' }}>
                <img className="img-card " src={require('../image/img4.jpg') } alt="img-card"></img>
                <a href='#!'>
                         <div className='mask' style={{ backgroundColor: 'rgba(10, 10, 10, 0.3)' }}></div>
                    </a>

            </div>
      
            
            <MDBCol><div className="title-eng">The Boys</div></MDBCol>
            <div className="title-vie">Anh Hùng Mất Dạy</div>
            
            
            
        </div>
        </>)
}

export default Card;