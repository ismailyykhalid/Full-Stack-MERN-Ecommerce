import React from "react";
import useShopContext from "../hooks/useShopContext";
import Card from "../components/Card";
import Product from "./Product";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useShopContext();

  return (
    <div>
      <img className=" animate-pulse" src={banner} alt="" />
      <div>
        <div className="text-center py-10">
          <h1 className="font-bold text-4xl uppercase  animate-bounce">
            Our New Collection is in the store
          </h1>
        </div>

        <div className=" flex justify-between items-center mx-24">
          <div>
            {" "}
            <span className="font-bold"> Showing 1-12</span> out of 36 prodcuts
          </div>
          <div>
            <button className="cursor-pointer flex justify-between  px-3 py-2 rounded-full  tracking-wider  border border-black hover:scale-105 duration-500 hover:ring-1 font-mono w-[130px] ">
              Sort by
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 ml-1 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 0"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* <!-- ✅ Grid Section - Starts Here 👇 --> */}
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center gap-y-14 gap-x-10 mt-10 "
        >
          {/* <!-- ✅ Product card 1 - Starts Here 👇 --> */}
          {all_product.map((item, index) =>
            category === item.category ? <Card key={index} item={item} /> : null
          )}
        </section>
        {/* <!-- 🛑 Grid Section - Ends Here --> */}
      </div>
      <div className="text-center p-10 ">
        <button className=" text-center mt-12 animate-pulse hover:animate-none overflow-hidden relative w-32 p-2 h-12 bg-gradient-to-r from-slate-500 to-slate-800 text-white border-none rounded-full text-xl font-bold cursor-pointer  z-10 group">
          Explore
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            More →
          </span>
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
