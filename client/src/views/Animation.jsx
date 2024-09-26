import React from "react";
import "./../views/Animation.css";

const Animation = () => {
  return (
    <div className=" h-[80vh] w-full lg:h-[150vh]  lg:w-[98.9vw] absolute body">
         
        <div className=" flex flex-row-reverse gap-5 items-center mt-5 lg:mt-40">
        <div className="w-[15%] mr-8 border-b-4 border-blue-700"></div>
            <div className="text-2xl text-white lg:text-6xl font-bold tracking-tighter">
              ORBIT
            </div>
          </div> 

      <div className="lol1">
        <div className="circleout"></div>

        <div className="circletext font-thin tracking-wide">
          <p className="text-blue-500 font-thin"> ORBIT SPEED </p> About 30
          km/hr
        </div>

        <div className="circleout1"></div>

        <div className="circletext1 font-thin tracking-wide">
          <p className="text-blue-500 font-thin"> ORBIT PERIOD </p> Synodic
          period of 365,256 days
        </div>
      </div>

      <div className=" rounded-full lg:ml-auto ml-24 mt-36 lg:mt-[100px] h-[50px] w-[50px]  lg:h-[480px] lg:w-[480px] bg-blue-900 mx-auto  imageshadow">
        <img
          src="src/assets/Images/Earth.png"
          alt=""
          className=" h-[180px] w-[180px]  lg:h-[480px] lg:w-[480px] bg-cover ml-[3px]"
        />
      </div>

      <div className="lol2">
        <div className="circleout2">
          <img
            src="https://pluspng.com/img-png/png-satellite-file-transiting-exoplanet-survey-satellite-artist-concept-transparent-background-png-1200.png"
            alt=""
          />
        </div>

        <div className="circletext2 font-thin tracking-wide">
          <p className="text-blue-500 font-thin"> GLOBUS SATELLITE </p>
        </div>
      </div>
    </div>
  );
};

export default Animation;
