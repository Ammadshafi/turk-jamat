import React,{useState} from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Logo from "../../Assets/images/jamat-logo.png";
import EventArray from "./EventArray"
import { EventCategory } from './EventArray';
import Array from "./crouselArray"
import MainCarousel from "../../Components/MainCarousel/MainCarousel";
import { Link } from 'react-router-dom';


const Event = () => {

const[category,setCategory]=useState("")
const filterfunc=()=>{
  if(category==""){
    return(EventArray)
  }
  else{
    return(EventArray.filter((cur)=>cur.category==category))
  }
}
const filterEvent=filterfunc()
  return (
    <div>
     <Navbar Logo={Logo} Name={"The veravel turk jamat"} />
     <MainCarousel Array={Array} />
     
    <div className="container">
        <div className=" justify-between text-center my-4 row ">
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">

        <h1 className="text-main col-2 text-center ">Events</h1>
          </div>
        <div className='col-12  col-md-6 d-flex justify-content-md-end justify-content-center my-4 my-md-0 '>
        <select className='text-main text-capitalize shadow'style={{border:"none",fontSize:"30px"}} onChange={(e)=>(setCategory(e.target.value))}>
        <option value="" >All</option>
        
        {
          EventCategory.map((cur)=>(
        <option value={cur} >{cur}</option>

          ))  
        }
        </select>
        </div>
        </div>
        <hr />
        <div className="d-flex justify-around">
        {
     filterEvent.map((cur)=>{

       return (
         <Link to={`/event/${EventArray.indexOf(cur)}`} className='d-card col-10 col-md-4 col-lg-3 my-2 mx-2 shadows'>
        <div  key={cur.id} >
         <img src={cur.mainimg} alt="" className='shadow'/>
    <div className="d-card-text bg-main">

      <p className="text-capitalize bold">{cur.name}</p>
   </div>
   </div>
   </Link>
    )})
}
        </div>
        

    </div>
    <Footer/>
    </div>
  )
}

export default Event