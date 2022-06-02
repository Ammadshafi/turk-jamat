import React from 'react'
import "./Navbar.css"



import { NavLink,Link } from 'react-router-dom'

const Navbar = ({Logo,Name}) => {
 
  return (
    <div className='home-nav '>
        <nav className="navbar navbar-light bg-light justify-between">
  <div className="container top-n">
    <NavLink className="navbar-brand d-flex" to={"/"}>
      <img src={Logo} style={{borderRadius:"50%"}} alt="logo" width="100" height="90" className="my-4 logo"/>
      <h4 className="text-capitalize text-start logo-h  mx-4 fw-bold" style={{marginTop:"50px"}}>{Name}</h4>
    </NavLink>
    <div className="collapse toggle-div" id="navbarToggleExternalContent">
 <ul className='bg-main text-center p-4'>
 <li className="nav-item ">
    <NavLink className="nav-link  text-light text-capitalize fw-bold" aria-current="page" to={"/"}>Home</NavLink>
  </li>
  <li className="nav-item ">
    <NavLink className="nav-link text-light text-capitalize fw-bold" to={"/about"}>About</NavLink>
  </li>
  <li className="nav-item ">
    <NavLink className="nav-link text-light text-capitalize fw-bold" to={"/event"}>event</NavLink>
  </li>
  <li className="nav-item ">
    <Link className="nav-link text-light text-capitalize fw-bold" to={"/contact"}>Contact</Link>
  </li>
 </ul>
  
</div>
<nav className="navbar navbar-dark bg-main shadow mx-2 hh"data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
  <div className="container-fluid">
  
      <span className="navbar-toggler-icon text-light"></span>
    
  </div>
</nav>
  </div>
 
</nav>
<ul className="nav justify-content-center bg-main p-1 navbar-ul">
  <li className="nav-item ">
    <NavLink className="nav-link  text-light fw-bold text-capitalize" aria-current="page" to={"/"}>Home</NavLink>
  </li>
  <li className="nav-item ">
    <NavLink className="nav-link text-light fw-bold text-capitalize" to={"/about"}>About</NavLink>
  </li>
  <li className="nav-item ">
    <NavLink className="nav-link text-light fw-bold text-capitalize" to={"/event"}>event</NavLink>
  </li>
  <li className="nav-item ">
    <NavLink className="nav-link text-light fw-bold text-capitalize" to={"/contact"}>Contact</NavLink>
  </li>
</ul>
    </div>
  )
}

export default Navbar