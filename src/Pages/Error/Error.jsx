import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../Assets/images/jamat-logo.png";
import "./Error.css"
const Error = () => {
  return (
    <div className='container error text-center'>
      <img src={Logo} alt={Logo} className="text-center"/>
      <h1 className='text-capitalize text-main'>Sorry! page not found</h1>
      <Link to={"/"} ><button className="text-light  text-capitalize bg-main  border-0"style={{padding:"15px 20px"}}>Back to home</button></Link>
    </div>
  )
}

export default Error