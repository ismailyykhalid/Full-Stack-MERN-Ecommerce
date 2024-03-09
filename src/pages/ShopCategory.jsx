import React from "react";
import useShopContext from "../hooks/useShopContext";
import Card from "../components/Card";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useShopContext();
  console.log(category, all_product);
  return (
    <div>
      <img src={banner} alt="" />
      <div>
        <div class="text-center py-10">
          <h1 class="font-bold text-4xl uppercase">
            Our New Collection is in the store
          </h1>
        </div>
        {/* <!-- ✅ Grid Section - Starts Here 👇 --> */}
        <section
          id="Projects"
          class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center gap-y-14 gap-x-10 mt-10 "
        >
          {/* <!-- ✅ Product card 1 - Starts Here 👇 --> */}
          {all_product.map((item, index) =>
            category === item.category ? <Card key={index} item={item} /> : null
          )}
        </section>
        {/* <!-- 🛑 Grid Section - Ends Here --> */}
      </div>
    </div>
  );
};

export default ShopCategory;
