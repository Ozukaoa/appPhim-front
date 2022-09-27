import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import {} from './css/create.css'
import {} from '..//..//node_modules/bootstrap/dist/css/bootstrap.min.css'
import Category from "./Category";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Array = new Set();

// const Category =[
//     "Hoạt Hình",
//     "Hành Động",
//     "Siêu Anh Hùng",
//     "Kinh Dị",
//     "Viễn Tưởng",
// ]
const initState ={
    name:"",
    image:"",
    year:"",
    describe:"",
    videoId:"", 
    country:"",
    episodes:[{}],
    category:[""],
}

const new_ep = {
    ep_name:"",
    ep_link:""
}

function Create(){

    
    const [state,setState] = useState(initState)
    const [ep,setEp] = useState(new_ep)
    const [cate,setCate] = useState([""])
    // const [cate1,setCategory] =useState(category)
    const {name,image,year,describe,videoId,category,country,
        episodes} = state
    const {ep_name,ep_link} = ep
    const navigate = useNavigate();
    const {id} = useParams()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    useEffect(()=>{
        if(id){
            getSingleData(id)
            
        }
        
    },[id])

    useEffect(()=>{
        console.log("rendered")
        
    },
    [])

    useEffect(()=>{
        console.log("rendered2")
        
    },
    [state.category])
  

    async function addData(data) {
        const res = await axios.post("http://localhost:3000/news/create", data);
        if (res.status === 200) {
        //    alert("Thành công")
            
        }

    }

    async function getSingleData(id) {
        try {
            const res = await axios.get(`http://localhost:3000/news/${id}`);
            if (res.status === 200) {
              
            setState({...res.data})
           
            
             
        }
            
        } catch (error) {
            
        }
        

    }

    

    async function updateData(data,id) {
        const res = await axios.put(`http://localhost:3000/news/${id}/edit`, data);
        if (res.status === 200) {
            //  alert("Thành công")
           
        }

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!name || !image || !describe|| !videoId || !country){
            
            // toast.error("dsds")
            alert("hãy nhập đủ trường")
        }
        else{
            if(!id){

            addData(state)
            navigate('/home');}
            else 
            {   
                updateData(state,id)
                navigate('/home');
            }
        }
        
        
    }
    
    

        const handleInputChange = (e) =>{
            let {name,value} = e.target;
            setState({...state,[name]:value})
            console.log(state)
        }


        const handleInputChange_ep = (e) =>{
            let {name,value} = e.target;
            setEp({...ep,[name]:value})
            
            console.log(ep)
            
           
        }

        const handle_ep = (e) =>{
            e.preventDefault()
            episodes.push(ep)
            console.log(episodes)

        }
        

   const checkedCate = (e) =>{
        if(Array.has(e.target.value) && !e.target.checked)
            {
                
                Array.delete(e.target.value)

            }

            else{Array.add(e.target.value)}

            setCate(Array)
            state.category=[...cate];
            
            console.log(state.category)
           
    }
        

    return (
        <div className="m-5 create">
        <h1>{id? "Chỉnh Sửa" : "Thêm Mới"}</h1>

            <form  onSubmit={handleSubmit}>
            
            <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Tên Phim</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="name" name="name" onChange={handleInputChange} value={name}/>
                </div>
            </div>
            <div class="form-group row"> 
                <label for="image" class="col-sm-2 col-form-label">Image</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="image" name="image" onChange={handleInputChange} value={image} />
                </div>
            </div>
            <div class="form-group row">
                <label for="year" class="col-sm-2 col-form-label">Năm sản xuất</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="year" name="year" onChange={handleInputChange} value={year} />
                </div>
            </div>
            <div class="form-group row">
                <label for="describe" class="col-sm-2 col-form-label">Mô tả</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="describe" name="describe" onChange={handleInputChange} value={describe}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="videoId" class="col-sm-2 col-form-label">VideoID</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="videoId" name="videoId" onChange={handleInputChange} value={videoId}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="country" class="col-sm-2 col-form-label">Quốc gia</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="country" name="country" onChange={handleInputChange} value={country}/>
                </div>
            </div>

            <div class="form-group row">
                <label for="episodes" class="col-sm-2 col-form-label">Số tập</label>
                <div class="col-sm-6">
                <input type="text" class="form-control" id="episodes" name="episodes" onChange={handleInputChange} value={episodes}/>

                
               
                </div>

                
                <Button className="col-sm-3" variant="primary" onClick={handleShow}>
                        Thêm chi tiết
                    </Button>
            </div> 

            {/* <input type="text" class="form-control" id="ep_name" name="ep_name" onChange={handleInputChange_ep}  value={ep_name}/>
            <input type="text" class="form-control" id="ep_link" name="ep_link" onChange={handleInputChange_ep}  value={ep_link} />
            <button onClick={handle_ep}>cn</button> */}
            {/* {
               
            } */}

            
                

                <>
                    

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Thêm Tập phim</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label className="col-sm-4">Tập</label>
                            <label className="col-sm-6">Link</label>
                            <button className="btn btn-success col-sm-2">Thêm </button>
                            { episodes.map((value,index)=>{
                    return(
                       <div key={index}>
                        <div className="form-group row">
                            <input type="text" className="form-control col-sm-4" id="ep_name" name="ep_name" value={episodes[index].ep_name} />
                            <input type="text" className="form-control col-sm-8" id="ep_link" name="ep_link"  value={value.ep_link}/>
                        </div>

                       </div>
                    )
                })}
                        </Modal.Body>
                        <Modal.Footer>

                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </>


           
            



            <div class="form-group row">
                <label for="category" class="col-sm-2 col-form-label">Thể Loại</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="category" name="category" onChange={handleInputChange} value={category}/>
                
                </div>

            </div>
          
         
            {Category.map((items,index)=>{
               
                if (category.includes(items)) {
                    return(
                        <div key={index}>
                        <div class="form-check form-check-inline">
                         <input class="form-check-input" type="checkbox" name="category" onChange={checkedCate} id="inlineCheckbox1" value={items}  checked />
                             <label class="form-check-label" for="inlineCheckbox1">{items}</label>
                        </div>
                        </div>
                    )
                } else {
                    return(
                        <div key={index}>
                        <div class="form-check form-check-inline">
                         <input class="form-check-input" type="checkbox" name="category" onChange={checkedCate} id="inlineCheckbox1" value={items}   />
                             <label class="form-check-label" for="inlineCheckbox1">{items}</label>
                        </div>
                        </div>
                    )
                }

               
            })
                
            }
            {/* <div class="form-group row">
                <label for="theloai" class="col-sm-2 col-form-label">Thể Loại</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="theloai"/>
                </div>
            </div> */}
            
            
            <div class="form-group row">
                <div class="col-sm-10">
                <input type="submit" class="btn btn-primary" value={id ? "Cập Nhật" : "Thêm mới"}/>
                </div>
            </div>

            </form>
            
        </div>
        
            )
}

export default Create;