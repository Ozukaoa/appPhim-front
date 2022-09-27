import { MDBAccordion, MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import Card from "../component/Card";
import './page.css'



function Home(){
    return (
        

        <>
           <div className="page">
                
                    <div className="title-a title_homepage">
                        <h2> Phim đề cử </h2></div>
                        

                
                
                        <div className="list-film">
                            
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>

                            
                        </div>
                    
                </div>
                        
            </>
    )
}

export default Home;