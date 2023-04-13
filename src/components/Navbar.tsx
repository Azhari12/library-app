import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import image from "@/assets/89977_f.jpg";

interface Props {
  cart: boolean;
}
const Navbar: FC<Props> = (props) => {
  const { cart } = props;
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const myString: string | null = localStorage.getItem("cart");
    if (myString !== null) {
      const array: number[] = JSON.parse(myString);
      setCartCount(array.length);
    }
  }

  return (
    <nav className="border-gray-200  bg-bg-navar navbar">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-16">
        <a href="#" className="flex">
          <span className="self-center text-lg font-semibold whitespace-nowrap text-library-logo">
            Library App
          </span>
        </a>
        <div className="flex md:order-2">
          <div className="relative mr-3 md:mr-0">
            <div className="flex-none">
              <div className="dropdown dropdown-end text-white">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      {cartCount}
                    </span>
                  </div>
                </label>
                {cart ? (
                  <div
                    tabIndex={0}
                    className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="font-bold text-lg">
                        {cartCount} Items
                      </span>
                      <div className="card-actions">
                        <Link
                          to={"/cart"}
                          className="btn btn-primary btn-block"
                        >
                          View cart
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
                <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">{cartCount} Items</span>
                    <div className="card-actions">
                      <Link to={"/cart"} className="btn btn-primary btn-block">
                        View cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={image} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-white"
                >
                  <li className=" block sm:hidden">
                    <Link to={"/"} className="justify-between">
                      Home
                    </Link>
                  </li>
                  <li className=" block sm:hidden">
                    <Link to={"/my-book"} className="justify-between">
                      My Book
                    </Link>
                  </li>
                  <li className=" block sm:hidden">
                    <Link to={"/my-rented-book"} className="justify-between">
                      My Rented book
                    </Link>
                  </li>
                  <li>
                    <Link to={"/profile"} className="justify-between">
                      Profile
                    </Link>
                  </li>

                  <li>
                    <Link to={"/login"}>Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
          id="mobile-menu-3"
        >
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to={"/"}
                className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-white md:p-0 rounded"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/my-book"}
                className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0"
              >
                My Book
              </Link>
            </li>
            <li>
              <Link
                to={"/my-rent-book"}
                className="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0"
              >
                My Rent Book
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
