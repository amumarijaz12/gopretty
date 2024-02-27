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
    <div className="   lg:w-full ">
      <div className="bg-green-300 sm:h-[80px] h-[100vh]  lg:flex fixed items-center justify-center ">
        <button
          className="sm:block  lg:pl-3 lg:hidden bg-white hover:bg-slate-200 md:pl-4"
          onClick={toggleMenu}
        >
          <img  className="h-6" src="../images/hamburger.png" alt="Hamburger" />
        </button>
      
      <div className={`${menuOpen ? "block" : "hidden"} lg:flex `}>
        <div className="lg:flex p-2 lg:mt-0 mt-8 ">
          <Link to="/" className="flex items-center">
            <img  className="" src="../images/logo.svg" alt="Logo" />
            <button className="text-white font-bold">GoPretty</button>
          </Link>

          <div className="lg:flex mt-6 lg:pl-[260px]  sm:pl-0 lg:mt-0  ">
            <Link to="/Shop">
              <button className="text-white  font-bold  lg:pl-8 pt-2 lg:pr-8">
                Shop
              </button>
            </Link>

            <div className="lg:pl-8 mb-2  lg:mb-0 relative">
              
                <button
                  className="text-white flex gap-1 font-bold mt-2 "
                  onClick={togglebutton}
                >
                  {/* <img className="pt-2" src="../images/dropdown.svg" alt="Dropdown" /> */}
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
              <button className="text-white mt-2  font-bold lg:pl-8  lg:mb-0">
                Sale
              </button>
            </Link>
</div>
<div>
            <Link to="/Contact">
              <button className="text-white mt-2  font-bold lg:pl-8 mb-2 lg:mb-0">
                Contact
              </button>
            </Link>
            </div>
            <div className="relative">
              <div className="lg:pl-6 pt-2    ">
              <img
                  className=" pl-2 pt-[5px] h-5 absolute "
                  src="../images/search.svg"
                  alt="Search"
                />
                <input
                  type="search"
                  className="lg:pl-6 pl-6 h-5 text-nowrap"
                  placeholder="Search for Products"
                  value={contextApi.searchInput}
                  onChange={contextApi.handleSearchInputChange}
                  onClick={() => {
                    setClick(!click);
                  }}
                />
               
              </div>
            
              {
                click && (
                <div className="bg-white rounded-sm mt-6 lg:ml-8 absolute ">
                  <ul className="">
                    {contextApi.filteredMenuItems.map((item) => (
                      <Link to={`/item/${item.id}`}>
                      <button onClick='hidden'>
                      <li key={item.id} className="text-wrap p-2">
                        {item.title}
                      </li>
                      </button>
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Like and Cart elements */}
        <div className="lg:flex  flex  lg:ml-[220px] md:ml-[120px]  items-center order-last">
          <Link to='/favorite'>
          <button className="pt-2">
            <img className="" src="../images/like.svg" alt="Like" />
          </button>
          </Link>
          <div className="flex gap-4 pt-2 ">
            <div className="relative">
              <Link to="/Cart">
                <img
                  className="pl-4 pr-6"
                  src="../images/Cart.svg"
                  alt="Cart"
                />
              </Link>
              <div className="rounded-full bg-[yellow]">
                <p className="absolute rounded-lg bg-yellow-300 p-1 top-[-15px] right-[12px] z-[20px]">
                  {count}
                </p>
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
