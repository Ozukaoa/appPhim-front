import React from "react";
import foot_img from "../asset/footer.jpg"
import "./footer.css"
import { SiFacebook} from "react-icons/si";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
function Footer(){
    return(
        <>
            <div className="f1">
                <div className="row">
                    <div className="foot_div">
                        <a href="#"> Liên hệ </a>
                        <a href="#"> Giới thiệu </a>
                        <a href="#"> Bản quyền </a>

                    </div>

                    <div className="foot_div">
                        <a href="#"> Phim bộ </a>
                        <a href="#"> Phim lẻ </a>
                        <a href="#"> Phim chiếu rạp </a>

                    </div>

                    <div className="foot_div">
                        <a href="#"> Facebook </a>
                        <a href="#"> Twitter </a>
                        <a href="#"> Line </a>

                    </div>
      
                </div>
                <hr/>
                <h5>thanhluan11112000@gmail.com</h5>
           

            </div>
            
        </>
    )
}

export default Footer