import React, { useState } from "react";
import './navbar.css';
import { Sidebardata } from "./Sidebardata";
import { Link } from 'react-router-dom';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

// import Bootstrap, {
//   NavDropdown,
//   Navbar,
//     Nav,
//     Form,
    
    
//     Button,
    
//   } from 'bootstrap-4-react';

function Nav1(){

  const [showNavColorSecond, setShowNavColorSecond] = useState(false);

    return (
        <>
         {/* <Navbar expand="md" dark fixed="top" bg="dark">
        <Navbar.Brand href="#">
          <img className="img-logo" src ={require('../image/logo-full.png')} alt="logo" ></img>
        </Navbar.Brand>
        <Navbar.Toggler
          target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <Navbar.Collapse id="navbarCollapse">
          <Navbar.Nav mr="auto">
                {Sidebardata.map((item,index) => {
                        return (
                            // <Nav.ItemLink href={item.path}><Link to ={item.path}>{item.title}</Link></Nav.ItemLink>,
                             
                             <Link to ={item.path} className="nav-items"> 
                                <Nav.ItemLink >{item.title}</Nav.ItemLink>
                              </Link> 

                        )  })}
           </Navbar.Nav>
          <Form inline mt="2 md-0">
            <Form.Input mr="sm-2" type="text" placeholder="Search" aria-label="Search" />
            <Button  danger my="2 sm-0" type="submit">Đăng nhập</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar> */}


      
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
        <MDBNavbarBrand href='#'><img className="img-logo" src ={require('../image/logo-full.png')} alt="logo" ></img></MDBNavbarBrand>
        <MDBNavbarToggler
          
          data-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavColorSecond(!showNavColorSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            <MDBNavbarItem className='active'>
              
            </MDBNavbarItem>
            {Sidebardata.map((item,index) => {
                        return (
                          <Link to ={item.path} className="nav-items"> 
                         <MDBNavbarLink> <MDBNavbarItem >{item.title}</MDBNavbarItem></MDBNavbarLink>
                        </Link> 
                  
                        )})}
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </>


        
      );
}

export default Nav1;