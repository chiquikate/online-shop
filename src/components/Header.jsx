"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";
import { setSelectedCurrency, setSelectedSymbol } from "../Redux/Cartslice";
import { useDispatch } from "react-redux";

import Image from "next/image";
import Logo from "../Image/Best Shop.png";

function Header() {
  const { data, status } = useSession();
  const cartItems = useSelector((state) => state.cart);
  const totalCartQuantity = cartItems?.cartItems?.reduce(
    (total, currentItem) => total + currentItem.cartQuantity,
    0
  );

  const router = useRouter();
  const currencyOptions = [
    { value: "USD", symbol: "$" },
    { value: "EUR", symbol: "€" },
    { value: "PHP", symbol: "₱" },
    { value: "IDR", symbol: "Rp" },
    { value: "AUD", symbol: "$" },
  ];

  const logoutFunc = () => {
    signOut();
    router.push("/signin");
  };
  const dispatch = useDispatch();
  const handleCurrencyChange = (e) => {
    const currency = currencyOptions.find(
      (option) => option.value === e.target.value
    );
    dispatch(setSelectedSymbol(currency.symbol));
    dispatch(setSelectedCurrency(e.target.value));
  };

  return (
    <div className="header-container">
      <Link href={"/"} className="link">
        <Image src={Logo} alt="logo" className="logo"></Image>
      </Link>
      <div className="header-left-container">
        {status == "unauthenticated" && (
          <Link href={"/signin"} className="link">
            <button className="sign-in-btn">Sign In</button>
          </Link>
        )}
        {status == "authenticated" && (
          <>
            <span style={{ color: "white" }} className="username">
              {data?.user?.name}
            </span>
            <button className="logout-btn" onClick={logoutFunc}>
              Logout
            </button>
          </>
        )}
        <Link href={"/cart"} className="link">
          <button className="cart">Cart:{totalCartQuantity}</button>
        </Link>
        <select
          className="currency"
          name="currency"
          onChange={handleCurrencyChange}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="PHP">PHP</option>
          <option value="PHP">IDR</option>
          <option value="PHP">AUD</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
