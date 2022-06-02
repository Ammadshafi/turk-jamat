import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Logo from "../../Assets/images/jamat-logo.png";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <Navbar Logo={Logo} Name={"The veravel turk jamat"} />
      <div className="container my-4 row justify-content-center mx-auto ">
        <div className="col-10  justify-content-center">
          <h1 className="text-main text-uppercase">veravel turk jamat</h1>
          <hr />
          <div>
            <h1 className="text-uppercase text-main">introduction</h1>
            <p>
              Veraval Turk Jamaat is a community in Karachi, Sindh, Pakistan.
              They are a sub-group of the Turk Jamat of Gujarat. Members of
              Veraval Turk Jamaat migrated from Veraval, India to Karachi,
              Pakistan after independence in 1947. Most of the members of this
              community are settled in Muhajir Camp of Baldia Town. Members of
              Veraval Turk Jamaat are Muslims and follow Sunni Hanafi school of
              Islam.
            </p>
            <h1 className="text-uppercase text-main">history</h1>
            <p>
              Veraval Turk Jamaat is a community in Karachi, Sindh, Pakistan.
              They are a sub-group of the Turk Jamat of Gujarat. Members of
              Veraval Turk Jamaat migrated from Veraval, India to Karachi,
              Pakistan after independence in 1947. Most of the members of this
              community are settled in Muhajir Camp of Baldia Town. Members of
              Veraval Turk Jamaat are Muslims and follow Sunni Hanafi school of
              Islam. Some members of Veraval Turk Jamaat still live in Veraval.
              The Veraval Turk Jamaat claim ancestry from Turk soldiers
              belonging to the army of Sultan Mahmud Ghaznavi who settled after
              the conquest of Somnath Temple. Most of the Turk soldiers settled
              near Somnath Temple in Veraval (a sea port of Junagardh State in
              Gujarat, India. After Partition in 1947 most of the members of
              this community migrated to Karachi, Pakistan to save their lives.
              In early 1950s they stayed at near Kharadar, Khadda Market,
              Baghdadi and Nayaabad in Karachi.
            </p>

            <h1 className="text-uppercase text-main">
              Fathers and grandfathers
            </h1>
            <p>
              Veraval Turk Jamaat is a community in Karachi, Sindh, Pakistan.
              They are a sub-group of the Turk Jamat of Gujarat. Members of
              Veraval Turk Jamaat migrated from Veraval, India to Karachi,
              Pakistan after independence in 1947. Most of the members of this
              community are settled in Muhajir Camp of Baldia Town. Members of
              Veraval Turk Jamaat are Muslims and follow Sunni Hanafi school of
              Islam. Some members of Veraval Turk Jamaat still live in Veraval.
              The Veraval Turk Jamaat claim ancestry from Turk soldiers
              belonging to the army of Sultan Mahmud Ghaznavi who settled after
              the conquest of Somnath Temple. Most of the Turk soldiers settled
              near Somnath Temple in Veraval (a sea port of Junagardh State in
              Gujarat, India. After Partition in 1947 most of the members of
              this community migrated to Karachi, Pakistan to save their lives.
              In early 1950s they stayed at near Kharadar, Khadda Market,
              Baghdadi and Nayaabad in Karachi.
            </p>
          </div>
        </div>
        <div className="shadow col-2 " style={{ marginTop: "100px" }}></div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
