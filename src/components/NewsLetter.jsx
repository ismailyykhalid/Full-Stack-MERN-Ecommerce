import React from "react";
import logofooter from "../assets/logofooter.png";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    // NEW LETTER START HERE
    <div>
      <div class="mx-auto  max-w-7xl px-6 sm:mt-10 mt-10 lg:px-6">
        <div class="relative isolate overflow-hidden bg-gradient-to-r from-teal-400 to-yellow-200 px-6 py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight  sm:text-4xl uppercase">
            Stay Updated
          </h2>

          <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-600">
            <span>
              Get Exclusive Offers on your email,{" "}
              <span className="font-bold">Subscribe to our news letter</span>
            </span>
          </p>

          <form class="mx-auto mt-10 flex max-w-md gap-x-4">
            <label for="email-address" class="sr-only">
              Email address
            </label>

            <div class="relative rounded-lg w-64 overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
              <input
                placeholder="Enter your Email"
                class="relative bg-transparent ring-0 outline-none border border-neutral-200 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500"
                type="text"
              />
            </div>

            <button
              type="submit"
              class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Notify me
            </button>
          </form>

          <svg
            viewBox="0 0 1024 1024"
            class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fill-opacity="0.7"
            ></circle>
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stop-color="#7775D6"></stop>
                <stop offset="1" stop-color="#7ED321" stop-opacity="0"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div>
        {/* NEW LETTER END HERE */}
        {/* FOOTER START HERE  */}
        <footer class="bg-white">
          <div class="container px-4 mx-auto">
            <div class="pt-24 pb-11 mx-auto max-w-4xl flex flex-col mg:justify-center md:items-center">
              <Link to="/">
                <img className="w-40 md:w-48" src={logofooter} alt="" />
              </Link>
              <div>
                <div class="flex flex-wrap justify-center -mx-3 lg:-mx-6">
                  <div class="w-full md:w-auto p-3 md:px-6">
                    <a class="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium">
                      Terms
                    </a>
                  </div>
                  <div class="w-full md:w-auto p-3 md:px-6">
                    <a class="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium">
                      Privacy
                    </a>
                  </div>
                  <div class="w-full md:w-auto p-3 md:px-6">
                    <a class="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium">
                      Contact Us
                    </a>
                  </div>
                  <div class="w-full md:w-auto p-3 md:px-6">
                    <a class="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium">
                      Careers
                    </a>
                  </div>
                  <div class="w-full md:w-auto p-3 md:px-6">
                    <a class="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium">
                      Pricing
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="border-b border-gray-100"></div>
            <div class="container px-4 mx-auto">
              <p class="py-10 md:pb-20 text-md text-gray-400 font-medium text-center">
                © 2024{" "}
                <span className=" font-bold text-black">Ismail Khalid.</span>{" "}
                All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NewsLetter;
