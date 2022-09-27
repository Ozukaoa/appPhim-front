import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Create from './pages/Create';

import React from 'react';
import Container from './component/Container';
import Nav from './component/Nav';
import { MovieProvider } from './MovieContext';
import Detail from './component/Detail';
import Watch from './component/Watch';
import Footer from './component/Footer';


function App() {
  return (
    <div className='app_1'>
        <MovieProvider>
       <Router>
        {/* <header><Nav/></header> */}
          
        <Routes>
         <Route
            
            path="/"
            element={
              <>
                <Nav />
                <Container/>
                <Footer/>
                
              </>
            }
          />
          <Route path="/movie">
            <Route path=":movieId" element={
                <>
                <Nav />
                <Detail/>
                
              </>
                
                } />
          </Route>
          <Route path="/watch">
            <Route path=":movieId" element={
                <>
                <Nav />
                <Watch/>
                
              </>

            } />
          </Route>
          
        
          <Route path='/home' element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/edit/:id" element={<Create/>}/>
        
          
        </Routes>
        {/* </div>
        <Footer/> */}
       </Router>
       </MovieProvider>

      

    </div>
  );
}

export default App;
