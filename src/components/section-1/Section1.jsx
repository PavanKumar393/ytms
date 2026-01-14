import React from "react";
import Navbar from "./Navbar";
import { ArrowRightFromLine } from "lucide-react";
import Button from "./Button";
import { RiGoogleFill, RiStarHalfSFill, RiStarSFill } from "@remixicon/react";
import ytms_bg from "../../assets/image/ytms-bg.webp";

const Section1 = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${ytms_bg})` }}
        className="hlo h-screen w-full text-white object-cover bg-no-repeat bg-center bg-cover  "
      >
        <Navbar />

        <div className="bottom  h-[70%] flex flex-col justify-end  px-3 mb-2 mt-5">
          <h1 className="text-6xl leading-12 mb-2">
            <ArrowRightFromLine size={94} strokeWidth={1.25} />
            Build with <br /> confidence and <br />
            deliver on time
          </h1>
          <p className=" mb-5 w-full leading-5 text-[1.8vh] text-blue-100">
            YMTS offers a complete range of services including <br></br>Web
            Design & Development, Mobile Applications,
            <br /> ERP Software Solutions, Digital Marketing, VLSI System
            Design, and Embedded System Design.
          </p>
          <Button data="Get in Touch" />
        </div>

        <div className="rating w-full h-[10vh] mt-8 bg-blue-500 flex items-start flex-col justify-center px-5  shadow-2xl ">
          <div className="flex items-end">
            <RiGoogleFill size={38} color="white" className="my-icon" />
            <div className="flex items-end py-1">
              <RiStarSFill size={26} color="orange" className="my-icon" />
              <RiStarSFill size={26} color="orange" className="my-icon" />
              <RiStarSFill size={26} color="orange" className="my-icon" />
              <RiStarSFill size={26} color="orange" className="my-icon" />
              <RiStarHalfSFill size={26} color="orange" className="my-icon" />
            </div>

            <h1 className="text-4xl mx-2  flex items-end font-extralight">
              4.8/5
            </h1>
          </div>
          <h3 className="px-2 opacity-80 font-extralight text-[14px]">
            Our Happy Clients on{" "}
            <span className=" text-amber-300">google.com</span>
          </h3>
        </div>
      </section>
    </>
  );
};

export default Section1;

{
  /* <RiHeartFill
            size={36} // set custom `width` and `height`
            color="red" // set `fill` color
            className="my-icon" // add custom class name
        /> */
}
