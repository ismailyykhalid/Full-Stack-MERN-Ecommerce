import { useContext } from "react";
import CartContext from "../context/CartContext";

const useCartCotext = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return cartContext;
};
export default useCartCotext;
