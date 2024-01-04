import React from "react";

import down from "../assets/down.png";
import career from "../assets/career5.png";
import career1 from "../assets/career1.png";
import career2 from "../assets/career2.png";
import career3 from "../assets/career3.png";
import career4 from "../assets/career4.png";
import career5 from "../assets/career5.png";

const Service = () => {
  return (
    <section className="bg-[#EEF5FF] p-20">
      <div className="text-center">
        <p className="text-primary font-bold">Service we work for</p>
        <h1 className="pb-8">What care we do for your career</h1>
        <img src={down} alt="" className="mx-auto" />
      </div>
      <div className="container mx-auto gap-y-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white p-20">
        <div className="text-center flex flex-col gap-4">
          <img src={career} alt="" className="mx-auto" />
          <h1 className="font-bold">Coding</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
          </p>
          <button className="text-primary font-bold">
            Learn More <span>></span>
          </button>
        </div>

        <div className="text-center flex flex-col gap-4">
          <img src={career1} alt="" className="mx-auto" />
          <h1 className="font-bold">Communication</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
          </p>
          <button className="text-primary font-bold">
            Learn More
            <span>></span>
          </button>
        </div>

        <div className="text-center flex flex-col gap-4">
          <img src={career2} alt="" className="mx-auto" />
          <h1 className="font-bold">Growth</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
          </p>
          <button className="text-primary font-bold">
            Learn More <span>></span>
          </button>
        </div>

        <div className="text-center flex flex-col gap-4">
          <img src={career3} alt="" className="mx-auto" />
          <h1 className="font-bold">Brain Storming</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
          </p>
          <button className="text-primary font-bold">
            Learn More <span>></span>
          </button>
        </div>

        <div className="text-center flex flex-col gap-4">
          <img src={career4} alt="" className="mx-auto" />
          <h1 className="font-bold">Collaboration</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
          </p>
          <button className="text-primary font-bold">
            Learn More <span>></span>
          </button>
        </div>

        <div className="text-center flex flex-col gap-4">
          <img src={career5} alt="" className="mx-auto" />
          <h1 className="font-bold">Help for Educational</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
          </p>
          <button className="text-primary font-bold">
            Learn More <span>></span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 my-6 gap-6">
        <div className="text-center">
          <h1 className="text-3xl text-primary mb-4">254</h1>
          <p>Successful Project</p>
        </div>

        <div className="text-center">
          <h1 className="text-3xl text-primary mb-4">3783</h1>
          <p>People Impacted</p>
        </div>

        <div className="text-center">
          <h1 className="text-3xl text-primary mb-4">8M</h1>
          <p>Money Donated</p>
        </div>

        <div className="text-center">
          <h1 className="text-3xl text-primary mb-4">60+</h1>
          <p>Volunteer Involved</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
