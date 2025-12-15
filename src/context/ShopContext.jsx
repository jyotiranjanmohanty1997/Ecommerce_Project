import React, { useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = React.createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const delivery_fee = 30;

  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [cartItems, setCartItems] = useState({});
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  // ---------------- ADD TO CART ----------------
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select a size!");
      return;
    }

    let cartCopy = structuredClone(cartItems);

    if (!cartCopy[itemId]) cartCopy[itemId] = {};
    if (!cartCopy[itemId][size]) cartCopy[itemId][size] = 0;

    cartCopy[itemId][size] += 1;

    setCartItems(cartCopy);
    toast.success("Added to cart!");
  };

  // ---------------- COUNT ITEMS ----------------
  const getCartCount = () => {
    let total = 0;
    for (const pid in cartItems) {
      for (const size in cartItems[pid]) {
        total += cartItems[pid][size];
      }
    }
    return total;
  };

  // ---------------- TOTAL AMOUNT ----------------
  const getCartAmount = () => {
    let total = 0;
    for (const pid in cartItems) {
      const product = products.find((p) => p._id === pid);
      if (!product) continue;

      for (const size in cartItems[pid]) {
        total += product.price * cartItems[pid][size];
      }
    }
    return total;
  };

  // ---------------- UPDATE QTY ----------------
  const updateQuantity = (itemId, size, quantity) => {
    let cartCopy = structuredClone(cartItems);

    if (quantity <= 0) {
      delete cartCopy[itemId][size];
      if (Object.keys(cartCopy[itemId]).length === 0) delete cartCopy[itemId];
    } else {
      cartCopy[itemId][size] = quantity;
    }
    setCartItems(cartCopy);
  };

  //---------------------PLACE ORDER ---------------------------
  const placeOrder = (address, paymentType) => {
    if (getCartCount() === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    
    const items = [];

    for (const pid in cartItems) {
      const product = products.find((p) => p._id === pid);

      for (const size in cartItems[pid]) {
        const qty = cartItems[pid][size];

        items.push({
          product,
          quantity: qty,
          size,
        });
      }
    }

   
    const order = {
      items,
      address,
      amount: getCartAmount() + delivery_fee,
      paymentType,
      orderDate: new Date().toLocaleString(),
      isPaid: paymentType !== "COD", // If COD → unpaid
    };

    setOrders([...orders, order]);

    
    setCartItems({});

    toast.success("Order placed successfully!");
    navigate("/order"); 

  return (
    <ShopContext.Provider
      value={{
        user,
        login: (email, name) => setUser({ email, name }),
        logout: () => {
          setUser(null);
          navigate("/login");
        },

        products,
        currency,
        delivery_fee,

        search,
        setSearch,
        showSearch,
        setShowSearch,

        cartItems,
        addToCart,
        updateQuantity,
        getCartCount,
        getCartAmount,

        orders,
        placeOrder,

        navigate,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
