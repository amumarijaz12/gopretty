import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/Context";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [ProductVisible, setProductVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);
  const [click, setClick] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const togglebutton = () => {
    setProductVisible(!ProductVisible);
  };

  const contextApi = useContext(Context);
  const count = contextApi.cartItems.length;

  return (
    <div className="">
      <div className="bg-green-300 lg:w-full md:w-full sm:w-[40px] lg:flex lg:fixed">
        <button
          className="sm:block lg:pl-3 lg:hidden  hover:bg-slate-200 md:pl-4"
          onClick={toggleMenu}
        >
          <img className="h-6" src="../images/hamburger.png" alt="Hamburger" />
        </button>
      
        <div className={`${menuOpen ? "block" : "hidden"} lg:flex lg:w-full`}>
          <div className="lg:flex p-2 lg:mt-0 mt-8 lg:w-full">
            <Link to="/" className="flex lg:pl-4">
              <img className="" src="../images/logo.svg" alt="Logo" />
              <button className="text-white font-bold">GoPretty</button>
            </Link>

            <div className="lg:flex mt-4 justify-center items-center sm:pl-0 lg:mt-0">
              <Link to="/Shop">
                <button className="text-white font-bold lg:pl-8 pt-1 lg:pr-8">
                  Shop
                </button>
              </Link>

              <div className="lg:pl-8 mb-2 lg:mb-0 relative">
                <button
                  className="text-white flex gap-1 font-bold mt-1"
                  onClick={togglebutton}
                >
                  <Link to='/Product'>Products</Link>
                  <img alt="" className="mt-1" src="../images/drp.svg"/>
                </button>
                <Dropdown
                  ProductVisible={ProductVisible}
                  togglebutton={togglebutton}
                />
              </div>

              <div>
                <Link to="/Sale">
                  <button className="text-white mt-1 font-bold lg:pl-8 lg:mb-0">
                    Sale
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/Contact">
                  <button className="text-white mt-1 font-bold lg:pl-8 mb-2 lg:mb-0">
                    Contact
                  </button>
                </Link>
              </div>

              <div className="relative lg:pl-6 pt-2">
                <img
                  className="pl-2 pt-[5px] h-5 absolute"
                  src="../images/search.svg"
                  alt="Search"
                />
                <input
                  type="search"
                  className="lg:pl-6 pl-6 h-5 text-nowrap"
                  placeholder="Search for Products"
                  value={contextApi.searchInput}
                  onChange={contextApi.handleSearchInputChange}
                  onClick={() => setClick(!click)}
                />
                {click && (
                  <div className="bg-white rounded-sm mt-4 lg:ml-8 absolute">
                    <ul>
                      {contextApi.filteredMenuItems.map((item) => (
                        <Link to={`/item/${item.id}`} key={item.id}>
                          <li className="text-wrap p-2">
                            {item.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Like and Cart elements */}
          <div className="flex order-last">
            <Link to='/favorite'>
              <button className="pt-4">
                <img className="" src="../images/like.svg" alt="Like" />
              </button>
            </Link>
            <div className="flex gap-4 pt-4">
              <div className="relative">
                <Link to="/Cart">
                  <img
                    className="pl-4 pr-6"
                    src="../images/Cart.svg"
                    alt="Cart"
                  />
                </Link>
                <div className="rounded-full bg-yellow-300 absolute top-[-15px] right-[12px]">
                  <p className="p-1 text-black">{count}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
