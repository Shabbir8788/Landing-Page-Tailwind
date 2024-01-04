import React from "react";

import states from "../assets/states.png";

const State = () => {
  return (
    <section>
      <div className="max-w-5xl mx-auto text-center py-20">
        <h1 className="pb-6 text-3xl">Those states we provide donation</h1>
        <p className="pb-6">
          We are organizing a program on January 20, 2019 to help the homeless
          people. <br />
          Our aim is to provide them a specific place to live.
        </p>
        <img src={states} alt="" />
      </div>
    </section>
  );
};

export default State;
