import vemu_logo from "../../assets/image/company-logos/vemu-logo.webp";
import amara_logo from "../../assets/image/company-logos/amara-logo.webp";
import jho_logo from "../../assets/image/company-logos/jhothisya-logo.webp";
import vidya_logo from "../../assets/image/company-logos/vidyanikethan-logo.webp";
import dps_logo from "../../assets/image/company-logos/dps-logo.webp";
import petrol_logo from "../../assets/image/company-logos/petrosoft-logo.png";
import ytms_logo from "../../assets/image/ytms-logo.webp";
import ScrollReveal from "../ui/ScrollReveal";



const Section2 = () => {
  return (
    <>
      <section className="h-screen w-full">
        <h1 className="text-blue-500 text-2xl px-7 pt-10">OUR HAPPY CLIENTS</h1>
        <p className="text-blue-500 leading-4.5 text-[2.2vh]  w-90 px-7 py-4">
          At YoungMinds Technology Solutions, we focus on delivering
          value-driven software solutions tailored to our clients’ needs. Our
          success is built on client satisfaction, strong relationships, and
          innovative technology that helps businesses grow and succeed
        </p>
        <div className="scroll-logo  p-8 mb-12  h-[40vh] flex  items-center justify-around relative">
          <div className=" w-30 flex flex-col gap-4">
            <img src={vidya_logo} alt="" />
            <img src={dps_logo} alt="" />
            <img className="mt-15" src={petrol_logo} alt="" />
          </div>
          <div className="w-35 flex gap-3.5 items-center flex-col">
            <img src={amara_logo} alt="" />
            <img className="w-30" src={vemu_logo} alt="" />
            <img src={jho_logo} alt="" />
          </div>
        </div>
        <p className="text-white  w-full bg-[#5899fa] text-end px-10">
          .....Many More Clients
        </p>
        {/* <div className=" flex items-end justify-end ">
          <h1 className="w-80 text-blue-300 text-2xl leading-5  mt-6">
            We help clients grow their business by accelerating development,
            modernizing existing products,and adopting AI-driven solution so
            they can ship faster without compromising on quality.{" "}
            <span className="text-5xl text-blue-600">That’s our promise.</span>
          </h1>
        </div> */}
<ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={0}
          blurStrength={2}
          
        >
          We help clients grow their business by accelerating development,
          modernizing existing products,and adopting AI-driven solution so they
          can ship faster without compromising on quality.
        </ScrollReveal>
        



      </section>
    </>
  );
};

export default Section2;
