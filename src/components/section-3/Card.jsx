import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../section-1/Button";

const Card = ({bg_color,color,id ,service}) => {
  console.log(bg_color,color);
  
  
  

  return (
    <>
      <div className="card w-90 h-90 bg-white text-blue-800 mb-4 px-5 pt-5 flex-col flex justify-around " style={{backgroundColor:`${bg_color}` ,color:`${color}`}}>
        <div className="card-top flex text-3xl leading-8">
          <h1>{id}</h1>
          <ArrowRight size={30} strokeWidth={1} />
          <h1>
            {service}
          </h1>
        </div>
        <div className="card-bottom">
          <h3 className=" leading-5 text-2xl">
            YoungMinds builds fast, secure, and user-friendly websites that help
            businesses grow. From simple pages to powerful platforms, we deliver
            clean design and smooth performance across all devices.
          </h3>

          <Button data="Learn More" />
        </div>
      </div>
    </>
  );
};

export default Card;
