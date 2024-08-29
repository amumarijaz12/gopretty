import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/Context";

const Items = () => {
  const [click, setClick] = useState(true);
  const contextApi = useContext(Context);
  const [products, setProducts] = useState([
    {
      id: "1",
      img: "../images/oil.svg",
      title: "Peeling Solution - Exfoliator",
      price: "$10.80",
      brandName: "The Ordinary",
    },
    {
      id: "2",
      img: "../images/cream.svg",
      title: "Body butter - 100 gms",
      price: "$7.80",
      brandName: "The Body Shop",
    },
    {
      id: "3",
      img: "../images/gel.svg",
      title: "Shower gel - 250ml",
      price: "$13.90",
      brandName: "The Body Shop",
    },
    {
      id: "4",
      img: "../images/soap.svg",
      title: "Hand Soap- 250ml",
      price: "$24.90",
      brandName: "Bath & Body Works",
    },
  ]);

  function handleProduct() {
    setClick(click);
    setProducts((prevProducts) => [...prevProducts, ...prevProducts]);
  }

  return (
    <>
      <div className="lg:flex justify-between items-center w-full bg-slate-200 p-4">
        <h1 className="text-2xl font-serif">Best Selling Product</h1>
        <button
          className="text-slate-400 font-semibold hover:underline"
          onClick={handleProduct}
        >
          View All Products
        </button>
      </div>
    <div className="flex gap-1">
      <div className="lg:grid lg:grid-cols-4 justify-center md:grid-cols-2 gap-6 mt-6 mb-6 ">
        {products.map((item) => (
          <div className="rounded-lg p-4 lg:mt-[60px] lg:mb-[60px] ml-8 mr-8 " key={item.id}>
            <Link to={`/item/${item.id}`}>
              <img
                className="w-full h-full object-cover rounded-t-md"
                alt={item.title}
                src={item.img}
              />
            </Link>
            <div className="p-2 bg-slate-200">
              <h2 className="text-green-600 text-lg font-serif">{item.brandName}</h2>
              <h3 className="font-semibold">{item.title}</h3>
              <div className="flex justify-between items-center pt-2">
                <h3 className="text-green-600 text-lg font-serif">{item.price}</h3>
                <div className="flex gap-2">
                <button
                    className="p-1"
                    onClick={() => {
                      const isFavorite = contextApi.favItems.some(
                        (favItem) => favItem.id === item.id
                      );
                      if (isFavorite) {
                        contextApi.removeProductFromFavoriteList(item.id);
                      } else {
                        contextApi.addtoFav(item);
                      }
                    }}
                  >
                    <svg
                      width="20"
                      height="17"
                      viewBox="0 0 26 23"
                      fill={
                        contextApi.favItems.some((favItem) => favItem.id === item.id)
                          ? "red"
                          : "none"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.5385 1.00015C22.0265 0.981169 25 2.71151 25 8.30445C25 13.8974 12.9999 22 12.9999 22C12.9999 22 1 13.8974 1 8.30445C1 2.71151 3.97343 1.00367 7.46154 1.00015C9.30769 0.998291 11.8478 2.14564 13.0001 3.73927C14.1522 2.14564 16.6716 1.01032 18.5385 1.00015Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    className="bg-green-400 text-white rounded-full p-1"
                    onClick={() => {
                      const isAdded = contextApi.cartItems.some(
                        (cartItem) => cartItem.id === item.id
                      );
                      if (isAdded) {
                        alert("Already added");
                      } else {
                        contextApi.addtoCart(item);
                      }
                    }}
                  >
                    <img alt="Add to cart" className="w-5 h-5" src="../images/Cart2.svg" />
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {click && (
        <button className="pl-4" onClick={handleProduct}>
          <img alt="Show more" src="../images/showmore.svg" />
        </button>
      )}
      </div>
    </>
  );
};

export default Items;
