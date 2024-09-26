import React from "react";
import img2 from "./images/image 2.png";
import measure from "./images/measurement.png";

const Activity = () => {
  return (
    <div className="flex bg-black text-white flex-col lg:flex-row items-center justify-between p-4">
      <div className="flex flex-col lg:flex-row p-8 lg:p-16 w-full">
        <div className="lg:w-1/2 w-full lg:m-8 mb-8 lg:mb-0">
          <div className="flex items-center">
            <div className="w-[15%] mr-4 border-b-4 border-blue-700"></div>
            <h1 className="text-2xl lg:text-6xl font-bold tracking-tighter">
              COMPANY ACTIVITY
            </h1>
          </div>

          <p className="mx-0 lg:mx-24 my-6 lg:my-12 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Varius enim in eros
            elementum tristique. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse varius enim in eros elementum
            tristique. Varius enim in eros elementum tristique.
          </p>

          <div className="flex flex-col lg:flex-row mx-0 lg:mx-24 :hidden">
            <img
              src={measure}
              alt="Left side description"
              className="hidden sm:block h-40 lg:h-80 mr-0 lg:mr-8 mb-4 lg:mb-0"
            />

            <div className="flex flex-col justify-center font-thin">
              <ul className="list-disc ml-5 space-y-4 lg:space-y-8 text-sm lg:text-base">
                <li>Company Activity 1</li>
                <li>Company Activity 2</li>
                <li>Company Activity 3</li>
                <li>Company Activity 4</li>
                <li>Company Activity 5</li>
                <li>Company Activity 6</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <img
            src={img2}
            alt="Right side description"
            className="h-40 lg:h-auto w-full lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Activity;
