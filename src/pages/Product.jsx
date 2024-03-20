import React, { useState, useEffect } from "react";
import BreadCrums from "../components/BreadCrums";
import all_product from "../assets/all_product";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

const Product = () => {
  // const [product, setProduct] = useState({});
  const { productId } = useParams();

  const product = all_product.find(
    (product) => product.id === Number(productId)
  );

  return (
    <div>
      <BreadCrums product={product} />
      <ProductDetail product={product} />
    </div>
  );
};

export default Product;
