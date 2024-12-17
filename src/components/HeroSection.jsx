import React from "react";

import Video1 from "../assets/video1.mp4";
import Video2 from "../assets/video2.mp4";

export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ">
        Virtual build Tools{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          for <br></br>developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex flex-col md:flex-row justify-center my-10 gap-4">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start For Free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Doucmentation
        </a>
      </div>
      <div className="flex flex-col md:flex-row mt-10 justify-center gap-3">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-3/4 mx-auto md:w-1/2 border border-orange-700 shadow-orange-400 my-4"
        >
          <source src={Video1} type="video/mp4" />
          Your browser dose not suport the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-3/4 mx-auto md:w-1/2 border border-orange-700 shadow-orange-400  my-4"
        >
          <source src={Video2} type="video/mp4" />
          Your browser dose not suport the video tag.
        </video>
      </div>
    </div>
  );
};
