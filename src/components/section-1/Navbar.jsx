import React from "react";
import ytms_logo from "../../assets/image/ytms-logo.webp";


const Navbar = () => {
  return (
    <>
      <div className="nav bg-white h-25 w-full flex justify-between items-center px-6 ">
        {/* <h1 className=" text-4xl">YMTS</h1> */}
        <img className="h-10" src={ytms_logo} alt="" />
        <h2 className="md:hidden font-[ytms-bold] text-[#2B7FFF]">Menu </h2>
      </div>
    </>
  );
};

export default Navbar;
