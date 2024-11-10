
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-800 to-purple-900">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm <br /> Rida Fatima
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            a passionate Frontend Developer and a Graphic Designer.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white w-full sm:w-fit">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#181818] w-[250px] h-[400px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/hero-image.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
