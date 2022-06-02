import React from "react";
import "./Department.css"
import car from "../../Assets/images/damicar.png"

const Department = () => {
  return (
    <div className="container my-4">
      <h1 className="text-main  text-capitalize bolder text-center">
        Our products
      </h1>
      <hr />
      <div className="d-cards d-flex justify-around">
 <div className="d-card col-10 col-md-3 shadow my-2">
   <img src={car} alt="" />
   <div className="d-card-text bg-main">

      <p className="text-capitalize bold">turk public sec school</p>
      <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos vitae quia eveniet! Dolores, error assumenda.</small>
   </div>
</div>
<div className="d-card col-10 col-md-3 shadow my-2">
   <img src={car} alt="" />
   <div className="d-card-text bg-main">

      <p className="text-capitalize bold">turk public sec school</p>
      <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos vitae quia eveniet! Dolores, error assumenda.</small>

   </div>
</div>
<div className="d-card col-10 col-md-3 shadow my-2">
   <img src={car} alt="" />
   <div className="d-card-text bg-main">

      <p className="text-capitalize bold">turk public sec school</p>
      <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos vitae quia eveniet! Dolores, error assumenda.</small>

      
   </div>
</div>

 </div>
    </div>
  );
};

export default Department;
