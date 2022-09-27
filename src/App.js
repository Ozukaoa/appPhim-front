
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav1 from './component/Nav1';
import Home from './page/Home';
import Anime from './page/Anime';
import PhimBo from './page/PhimBo';
import PhimLe from './page/PhimLe';
import Search from './page/Search';
import Footer from './component/Footer';
import { Sidebardata } from './component/Sidebardata';

function App() {
  return (
    <>
       <Router>
        <header><Nav1/></header>
          <div className='main'>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/anime' element={<Anime/>}/>
          <Route path="/phimbo" element={<PhimBo/>}/>
          <Route path="/phimle" element={<PhimLe/>}/>
          <Route path="/search" element={<Search/>}/>
          
        </Routes>
        </div>
        <Footer/>
       </Router>

      

    </>
   
    
  );
}

export default App;
