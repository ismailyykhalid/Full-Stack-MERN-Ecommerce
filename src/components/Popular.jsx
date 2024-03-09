import React from "react";
import Card from "./Card";
import data_product from "../assets/data.js";

const Popular = () => {
  return (
    <div>
      <div class="text-center p-10">
        <h1 class="font-bold text-4xl uppercase">Pouplar in Women</h1>
      </div>

      {/* <!-- ✅ Grid Section - Starts Here 👇 --> */}
      <section
        id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {data_product.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </section>

      {/* <!-- 🛑 Grid Section - Ends Here --> */}
    </div>
  );
};

export default Popular;
