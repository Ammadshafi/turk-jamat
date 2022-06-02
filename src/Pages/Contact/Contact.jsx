import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Logo from "../../Assets/images/jamat-logo.png";

const Contact = () => {
  return (
    <>
        <Navbar  Logo={Logo} Name={"The veravel turk jamat"}/>
        <div className="col-md-6 mx-auto my-4 col-11">
            <div className=" contact-main row" >
                <div className="col-md-4 bg-main col-12 text-light">
                    <div className="contact-info text-center    ">
                   <h1 className='text-center 'style={{marginTop:"10vh",fontSize:'60px'}} > <i className="fa-solid fa-envelope "></i></h1>
                        <h1 >Contact Us</h1>
                        <h3 className="sub_resp">We would love to hear from you !</h3>
                    </div>
                </div>
                <div className="col-md-8 py-4 ">
                    <div className="contact-form">
                        <div className="form-group">
                          <label className="control-label col-sm-2 text-capitalize fw-bold" htmlFor="fname">Name:</label>
                          <div className="col-sm-10">          
                            <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-2 text-capitalize fw-bold" htmlFor="fname">phone no:</label>
                          <div className="col-sm-10">          
                            <input type="text" className="form-control" id="fname" placeholder="Enter Phone number" name="fname"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-2 text-capitalize fw-bold" htmlFor="email">Email:</label>
                          <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-2 text-capitalize fw-bold" htmlFor="comment">problem:</label>
                          <div className="col-sm-10">
                            <textarea className="form-control" rows="5" id="comment"></textarea>
                          </div>
                        </div>
                        <div className="form-group">        
                          <div className="col-sm-offset-2 col-sm-10">
                            <input type="submit" className=" bg-main text-light my-2"/>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        <Footer/>
    </>
  )
}

export default Contact