import React from "react";

import team from "../assets/team.png";
import shape from "../assets/shape.png";

const Contact = () => {
  return (
    <section className="container mx-auto py-20">
      <div>
        <img src={team} alt="" className="mx-auto" />
        <div className="max-w-6xl mx-auto p-16 text-white bg-secondary flex flex-col md:flex-row justify-between gap-4 items-center rounded-lg">
          <h1 className="text-2xl font-bold text-center md:text-left">
            Do you have any question? Feel <br />
            free to contact us
          </h1>
          <img src={shape} alt="" />
          <button className="bg-white text-secondary font-bold px-16 py-3 rounded-md">
            CONTACT US NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
