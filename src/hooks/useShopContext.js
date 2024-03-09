import { useContext } from "react";
import { ShopContext } from "../context/ShopContext"; // Update the path accordingly

const useShopContext = () => {
  const shopContext = useContext(ShopContext);

  if (!shopContext) {
    throw new Error("useShopContext must be used within a ShopProvider");
  }

  return shopContext;
};

export default useShopContext;
