import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const { cart } = useContext(CartContext);
  console.log(cart);

  useEffect(() => {
    if (!cart.items) {
      return;
    }
    fetch("https://star-spark-pasta.glitch.me/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/Json",
      },
      body: JSON.stringify({ ids: Object.keys(cart.items) }),
    })
      .then((res) => res.JSON())
      .then((products) => {
        setProducts(products);
      });
  }, [cart]);

  return (
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold">Cart Items</h1>
      <ul>
        <li className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="h-16" src="/images/peproni.png" alt="" />
              <span className="font-bold ml-4 w-48">Doubble peproni</span>
            </div>
            <div>
              <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                -
              </button>
              <span className="px-4">2</span>
              <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                +
              </button>
            </div>
            <span>₹ 500</span>
            <div>
              <button className="bg-red-600 px-4 py-2 rounded-full leading-none text-white">
                Delete
              </button>
            </div>
          </div>
        </li>
      </ul>

      <ul>
        <li className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="h-16" src="/images/peproni.png" alt="" />
              <span className="font-bold ml-4 w-48">Doubble peproni</span>
            </div>
            <div>
              <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                -
              </button>
              <span className="px-4">2</span>
              <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                +
              </button>
            </div>
            <span>₹ 500</span>
            <div>
              <button className="bg-red-600 px-4 py-2 rounded-full leading-none text-white">
                Delete
              </button>
            </div>
          </div>
        </li>
      </ul>
      <hr className="my-6"></hr>
      <div className="text-right">
        <b>Grand Total : ₹ 500</b>
      </div>
      <div className="text-right mt-6">
        <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
