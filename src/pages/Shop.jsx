import React from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import OfferBanner from "../components/OfferBanner";
import NewCollection from "../components/NewCollection";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <OfferBanner />
      <NewCollection />
    </div>
  );
};

export default Shop;
