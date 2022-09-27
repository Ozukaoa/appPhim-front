import React from "react";
import './footer.css';
import {
   
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';

function Footer (){
    return(
        <>
            <section className="">
                <div className="bg ">
                   <ul className="text MDBCol align-items-start mb-3 ">
                        <span>Thể Loại</span>
                        <a href="#"><li>Liên hệ</li></a>
                        <a href="#"><li>Liên hệ</li></a>
                        <a href="#"><li>Liên hệ</li></a>
                        <a href="#"><li>Liên hệ</li></a>
                        <a href="#"><li>Liên hệ</li></a>
                   </ul>

                   <ul className="text MDBCol size='9'">
                        <span>Năm Sản Xuất</span>
                        <a href="#"><li>Liên hệ</li></a>
                        <a href="#"><li>Liên hệ</li></a>
                        <a href="#"><li>Liên hệ</li></a>
                        <a href="#"><li>Liên hệ</li></a>
                        <a href="#"><li>Liên hệ</li></a>
                   </ul>

                   <ul className="text MDBCol size='9'">
                    <span>Thông tin liên hệ</span>
                        <a href="#"><li>Liên hệ</li></a>
                        <a href="#"><li>Liên hệ</li></a>
                        <a href="#"><li>Liên hệ</li></a>
                        <a href="#"><li>Liên hệ</li></a>
                        <a href="#"><li>Liên hệ</li></a>
                   </ul>

                </div>
            </section>
        </>
    )
}
export default Footer;