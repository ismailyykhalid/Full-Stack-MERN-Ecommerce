import React from "react";
import { createContext } from "react";
import all_product from "../assets/all_product.js";

export const ShopContext = createContext();
const ShopContextProvider = ({ children }) => {
  return (
    <ShopContext.Provider value={{ all_product }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
