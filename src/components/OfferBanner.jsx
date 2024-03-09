import React from "react";
import offer from "../assets/offer.png";

const OfferBanner = () => {
  return (
    <div>
      <section class="text-gray-600 body-font bg-white ">
        <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
          <div class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none  text-gray-800">
              Exclusive
              <span class="text-5xl sm:text-7xl ">OFFERS for you only</span>
            </h1>
            <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed  uppercase">
              Only the best seller products
            </p>
            <div class="flex justify-center">
              <button class="group rounded-full group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold   overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                Check Now
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={offer}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferBanner;
