"use client";
import { useContext } from "react";
import { AuthContext } from "../layout";

const CartPage = () => {
  const { setCartItem, cartItem } = useContext(AuthContext);
  console.log(cartItem);

  const updateQuantity = (id, action) => {
    setCartItem((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increment"
                  ? item.quantity + 1
                  : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  // Function to remove an item
  const removeItem = (id) => {
    setCartItem(cartItem.filter((item) => item.id !== id));
  };

  // Calculate total
  const total = cartItem.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      {cartItem.length > 0 ? (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4"
            >
              <div className="flex items-center" key={item.id}>
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-4" key={item.id}>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4" key={item.id}>
                <button
                  onClick={() => updateQuantity(item.id, "decrement")}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, "increment")}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
            <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">
          Your cart is empty. Start shopping now!
        </p>
      )}
    </div>
  );
};

export default CartPage;
