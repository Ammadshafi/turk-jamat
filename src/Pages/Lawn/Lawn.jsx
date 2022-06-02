import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Logo  from "../../Assets/images/lawn.jpg"

import MainCarousel from "../../Components/MainCarousel/MainCarousel";
import Footer from "../../Components/Footer/Footer";
const Array = [
  {
    id: 1,
    img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/car/SVJ_Roadster_gateway%20modelli.png",
    title: "Welcome ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis sequi explicabo soluta, nam hic quos voluptat distinctio ipsum similique ducimus illo quia blanditiis quam aliquid iure autem eaque. Sit?",
  },
  {
    id: 2,
    img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/car/SVJ_Roadster_gateway%20modelli.png",
    title: "Welcome ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis sequi explicabo soluta, nam hic quos voluptat distinctio ipsum similique ducimus illo quia blanditiis quam aliquid iure autem eaque. Sit?",
  },
  {
    id: 3,
    img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/car/SVJ_Roadster_gateway%20modelli.png",
    title: "Welcome ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis sequi explicabo soluta, nam hic quos voluptat distinctio ipsum similique ducimus illo quia blanditiis quam aliquid iure autem eaque. Sit?",
  },
];
const Lawn = () => {
  return (
    <div>
      <Navbar Logo={Logo} Name={"The Turk hall"} />
      <MainCarousel Array={Array} />
      <Footer />
    </div>
  );
};

export default Lawn;
