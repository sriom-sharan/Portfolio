import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Client = () => {
  return (
    <div className="py-20" id="testimonials" >
      <h1 className="heading">
        Kind words from{" "}
        <span className="text-purple">satisfied client.</span>
      </h1>
      <div className="flex flex-wrap items-center mt-10">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow"/>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
        {/* {companies.map(({name,img,id,nameImg})=>(
        <React.Fragment key={id}>
                 <div className="flex md:max-w-60 max-w-32 gap-2">
                 <img
                   src={img}
                   alt={name}
                   className="md:w-10 w-5"
                 />
                 <img
                   src={nameImg}
                   alt={name}
                   width={id === 4 || id === 5 ? 100 : 150}
                   className="md:w-24 w-20"
                 />
               </div>
             </React.Fragment>
        ))} */}
      </div>
    </div>
  );
};

export default Client;
