import React from "react";
import Card from "./Card";

const Section3 = () => {
  return (
    <>
      <section className="min-h-screen bg-blue-400 w-full text-white bg-amber-00 mt-35 py-8 px-10 flex justify-center items-center flex-col">
        <div className="sec3-top ">
          <h3 className="mb-3 text-xl  ">WHAT WE DO</h3>
          <h1 className="leading-10 mb-4">
            Effective Software <br />
            Development
          </h1>
        </div>
        <Card bg_color="#8ABEB9" id ="01"color="white" service="Website Development Services"/>
        <Card bg_color="#8DD4FF" color="white" id ="02" service="Software Development Services"/>
        <Card bg_color="#B5B4FF" color="white" id ="03" service="Mobile Application Services"/>
        <Card bg_color="#E8AFFF" color="white" id ="04" service="Web Application Development Services"/>
        <Card bg_color="#8DD4FF" color="white"id ="05" service="Embedded System Design Services"/>
        <Card bg_color="#A8DF8E" color="white" id ="06" service="E-Commerce Development Services"/>
        <Card bg_color="#F16D34" color="white" id ="07" service="Digital Marketing Services"/>
        <Card bg_color="#AEDEFC" color="sky-blue" id ="08" service="VLSI System Design Services"/>
        
      </section>
    </>
  );
};

export default Section3;
