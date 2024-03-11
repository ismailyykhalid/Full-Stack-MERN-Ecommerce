import React from "react";
import Card from "./Card";
import new_collections from "../assets/new_collections.js";

const NewCollection = () => {
  return (
    <div>
      {" "}
      <div className="text-center py-10  ">
        <h1 className="font-bold text-4xl uppercase">
          Our New Collectionis in the store
        </h1>
      </div>
      {/* <!-- ✅ Grid Section - Starts Here 👇 --> */}
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center gap-y-14 gap-x-10 mt-10 "
      >
        {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
        {new_collections.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </section>
      {/* <!-- 🛑 Grid Section - Ends Here --> */}
    </div>
  );
};

export default NewCollection;
