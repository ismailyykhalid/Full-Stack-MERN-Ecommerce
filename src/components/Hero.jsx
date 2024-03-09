import React from "react";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <div>
      <main class="bg-gradient-to-r from-white to-pink-50/30">
        <div class=" flex relative z-20 items-center overflow-hidden mx-11">
          <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span class="w-20 h-2 bg-gray-800  mb-12"></span>
              <h1 className=" font-semibold  ">
                New Collections in the Store{" "}
              </h1>
              <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none  text-gray-800">
                Be on
                <span class="text-5xl sm:text-7xl ">New Arrivals</span>
              </h1>

              <div class="mt-8">
                <button class="px-4 z-30 py-2 bg-rose-400 rounded-full text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl uppercase">
                  Latest Collection →
                </button>
              </div>
            </div>
            <div class="hidden sm:block sm:w- lg:w-3/5 relative mt-[-180px]">
              <img src={logo} class=" md:max-w-lg m-auto" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
