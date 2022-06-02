import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../../Components/Navbar/Navbar'
import EventArray from '../EventArray'
import Logo from "../../../Assets/images/jamat-logo.png";

const EventPage = () => {
    const {ids}=useParams()
    const{id,mainimg,video,name,category,desc}=EventArray[ids]
    console.log(video)

  return (

    <div>
              <Navbar Logo={Logo} Name={"The veravel turk jamat"} />

     <video src={video} autoPlay  controls style={{width:"100%",height:"50vh"}} className="shadow" ></video>
     <div className="container justify-content-center d-flex flex-column">
     <h1 className="text-main text-capitalize my-4 text-center">{category}</h1>

     <hr />
     <img src={mainimg} className="my-4" style={{height:"30vh"}}/>
     <h1 className='text-capitalize text-main'>{name}</h1>
    <p>{desc}</p>
    </div>
    </div>
  )
}

export default EventPage