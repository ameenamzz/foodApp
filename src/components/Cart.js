import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="border-2 bg-black text-amber-50 p-2 px-3 mt-2 rounded-lg cursor-pointer hover:bg-gray-600"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h1>Cart is Empty. Please add  Item</h1>}
      <div className="w-6/12 m-auto mt-10">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
