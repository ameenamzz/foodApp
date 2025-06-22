import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UsesrContext from "../utils/UserContext";
import Grocery from "./Grocery";
import About from "./About";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnChange, setBtnChange] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UsesrContext);

  const cart = useSelector((store) => store.cart.items);
  console.log(cart);
  return (
    <div className="flex justify-between  mx-5 shadow-2xl rounded-md">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL}></img>
      </div>
      <div className="mt-15">
        <ul className="flex gap-1 items-center">
          <li className="pr-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="pr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="pr-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="pr-4">
            <Link to="/cart"> Cart-{cart.length} </Link>
          </li>

          <li className="pr-4">
            {" "}
            <Link to="/grocery">Grocery </Link>
          </li>

          <button
            className="pr-4 hover:cursor-pointer"
            onClick={() => {
              btnChange === "login"
                ? setBtnChange("logout")
                : setBtnChange("login");
            }}
          >
            {btnChange}
          </button>
          <li className="pr-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
