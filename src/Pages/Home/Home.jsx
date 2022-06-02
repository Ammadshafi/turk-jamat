import React from "react";
import MainCarousel from "../../Components/MainCarousel/MainCarousel";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/jamat-logo.png";
import Footer from "../../Components/Footer/Footer";
import Member from "../../Components/Members/Member";
import Array from "./HomeArray";
import "./Home.css";
import Department from "../../Components/Depatment/Department";
const Home = () => {
  return (
    <div>
      <Navbar Logo={Logo} Name={"The veravel turk jamat"} />
      <MainCarousel Array={Array} />
      <div
        className="container-fluid bg-main "
        style={{ marginTop: "-10px", ZIndex: "1" }}
      >
        <div className="container p-2">
          <h2 className="text-light text-capitalize fw-bold">overview</h2>

          <p className="text-light text-capitalize ">
          Veraval Turk Jamaat is a community in Karachi, Sindh, Pakistan.
              They are a sub-group of the Turk Jamat of Gujarat. Members of
              Veraval Turk Jamaat migrated from Veraval, India to Karachi,
              Pakistan after independence in 1947. Most of the members of this
              community are settled in Muhajir Camp of Baldia Town. Members of
              Veraval Turk Jamaat are Muslims and follow Sunni Hanafi school of
              Islam.
            <Link
              className="btn btn-light text-main fw-bold mx-4 my-2"
              to="/about"
            >
              Read More
            </Link>
          </p>
        </div>
      </div>
      <Department/>
      <Member />
      <Footer />
    </div>
  );
};

export default Home;
