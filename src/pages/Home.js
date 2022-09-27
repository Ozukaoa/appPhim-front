import React,{useState, useEffect} from "react";
import axios from "axios"
import { Link } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import  './css/home.css'
import Pagination from "./Pagination";
 import {} from '..//..//node_modules/bootstrap/dist/css/bootstrap.min.css'

function Home(){

    const [currentPage,setCurrentPage] = useState(1)
    const [postsPerPage,setPostPerPage] = useState(5)
    const[data,setData] = useState([]);

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };


    useEffect(()=>{
        getCourse();
    },[])

    useEffect(()=>{
        setData(data)
    },[data])   

    const getCourse = async ()=>{
        try {
            const res = await axios.get("http://localhost:3000/news")
         setData(res.data)
         console.log(res.data)
            
        } catch (error) {
            
        }
        
    }

    const deleteCourse = async (id)=>{
        try {
            if(
                window.confirm("Bạn có chắc muốn xoá phim")
            ){
            const res = await axios.delete(`http://localhost:3000/news/${id}`)
            getCourse();}
            
        } catch (error) {
            
        }
        
    }

    
   //Get Current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost =  indexOfLastPost - postsPerPage
   const currentPosts = data.slice(indexOfFirstPost,indexOfLastPost)

    const paginate =(pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='home_display'>


    

<Link to="/"> <h1>Home</h1> </Link>


        
        
        
        
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Tên Phim</th>
                <th scope="col">Thể Loại</th>
                <th scope="col" colSpan="1">Ngày thêm</th>
                <th> 
                    <Link to ={'/create'}>
                    <button className="btn btn-success home_display">Thêm Phim mới</button>
                    </Link>
                    </th>

                </tr>
            </thead>


            <tbody>
                {currentPosts && currentPosts.map((items,index)=>{
                    const array = items.category
                    const date = items.createdAt
                    
                    return(
                        <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{items.name}</td>
                        <td>{array[0]+", "+ array[1]}</td>
                        <td>{date.slice(0,10)}</td>

                        <td className="pt-2 pb-0 ">
                            <Link to= {`/edit/${items._id}`}><button type="button" className="btn btn-primary">Chỉnh sửa</button></Link>
                            
                            
                            <button className="btn btn-danger" onClick={()=>deleteCourse(items._id)}>Xoá</button>

                            {/* <button className="btn btn-danger" onClick={showModal}>Xoá</button>
                            <Modal show={isOpen} onHide={hideModal}>
                                <Modal.Header>
                                <Modal.Title>Xác nhận{items.name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Bạn có chắc chắn muốn xoá phim "{items.name}"</Modal.Body>
                                <Modal.Footer>
                                <button className="btn btn-danger" onClick={()=>deleteCourse(id)}>Xoá</button>
                                <button className="btn btn-primary"onClick={hideModal} >Huỷ</button>
                                </Modal.Footer>
                            </Modal> */}
                           

      </td>
        </tr>
                        
                    )
                })}

            </tbody>
            </table>
            <div className=""> 
            <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>
            </div>
        </div>
    )
}

export default Home;