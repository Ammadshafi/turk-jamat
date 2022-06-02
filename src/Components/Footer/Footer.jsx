import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className=" justify-between d-flex row">
        <div className="my-4 d-flex justify-content-center col-12 col-md-6">
          <p className="text-light my-2 text-capitalize ">
            © The Veravel turk jamat
          </p>
          </div>
        
       <ul className="footer-right col-md-6 col-12  d-flex my-4 justify-content-center">
            <li>
              <i className="fa  fa-envelope"></i>
            </li>
            <li>
              <i className="fa-brands  fa-facebook-f"></i>
            </li>
            <li>
              <i className="fa-brands  fa-twitter"></i>
            </li>
            <li>
              <i className="fa-brands  fa-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-linkedin-in"></i>
            </li>
          </ul>
      
      </div>
    </footer>
  );
};

export default Footer;
