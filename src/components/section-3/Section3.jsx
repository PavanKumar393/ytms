import React from "react";
import Card from "./Card";

const Section3 = () => {
  return (
    <>
      <section className="min-h-screen  w-full text-blue-600 bg-amber-00 mt-35 py-8  flex justify-center items-center flex-col">
        <div className="sec3-top ">
          <h3 className="mt-4 mb-3 text-xl  ">WHAT WE DO</h3>
          <h1 className="leading-10 mb-4">
            Effective Software <br />
            Development
          </h1>
        </div>
        <Card bg_color="#FBE580"  id ="01"color="text-slate-600" service="Website Development Services"/>
        <Card bg_color="#8DD4FF" color="text-slate-600" id ="02" service="Software Development Services"/>
        <Card bg_color="#B5B4FF" color="text-slate-600" id ="03" service="Mobile Application Services"/>
        <Card bg_color="#E8AFFF" color="text-slate-600" id ="04" service="Web Application Development Services"/>
        <Card bg_color="#8DD4FF" color="text-slate-600"id ="05" service="Embedded System Design Services"/>
        <Card bg_color="#A8DF8E" color="text-slate-600" id ="06" service="E-Commerce Development Services"/>
        <Card bg_color="#B0FFFA" color="text-slate-600" id ="07" service="Digital Marketing Services"/>
        <Card bg_color="#AEDEFC" color="text-slate-600" id ="08" service="VLSI System Design Services"/>
        
      </section>
    </>
  );
};

export default Section3;
