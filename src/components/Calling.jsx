import React from "react";

import meeting from "../assets/meeting.png";

const Calling = () => {
  return (
    <section className="container mx-auto py-20 text-center">
      <h1 className="text-3xl pb-6">Introducing video calling support</h1>
      <p className="pb-6">
        Every email, web page, and social media post makes an impression on your
        customers. <br />
        With our software you can be confident it's impression.
      </p>
      <button className="text-primary font-bold">
        Explore Details <span>></span>
      </button>

      <div className="relative">
        <img src={meeting} alt="" className="mx-auto" />
        <div className="md:absolute top-40 left-20 w-full md:w-[280px] m-4 bg-[#FABF62] text-white text-left font-bold p-10 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]">
          <p>Hi, I’m Andry. Let me know what can I do for you</p>
        </div>
        <div className="md:absolute bottom-40 right-20 w-full md:w-[280px] m-4 bg-[#FFFFFF] text-[#FABF62] font-bold text-left p-8 rounded-tl-[20px] rounded-br-[20px] shadow-lg">
          <p>your personal support assistance</p>
        </div>
      </div>
    </section>
  );
};

export default Calling;
