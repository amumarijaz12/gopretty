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
      addtoCartOpt: "",
    },
    {
      id: "2",
      img: "../images/cream.svg",
      title: "Body butter - 100 gms",
      price: "$7.80",
      brandName: "The Body Shop",
      addtoCartOpt: "",
    },
    {
      id: "3",
      img: "../images/gel.svg",
      title: "Shower gel - 250ml",
      price: "$13.90",
      brandName: "The Body Shop",
      addtoCartOpt: "",
    },
    {
      id: "4",
      img: "../images/soap.svg",
      title: "Hand Soap- 250ml",
      price: "$24.90",
      brandName: "Bath & Body Works",
      addtoCartOpt: "",
    },
  ]);

  function handleProduct() {
    setClick(!click);
    setProducts((product) => {
      return [...product, ...product];
    });
  }
  return (
    <>
      <div className="lg:flex justify-between bg-slate-200">
        <h1 className=" text-2xl text-nowrap static pl-6 p-4 font-serif">
          Best Selling Product
        </h1>

        <button
          className=" order-last pl-8 lg:pr-4 text-nowrap font-semibold hover:underline text-slate-400"
          onClick={handleProduct}
        >
          View All Products
        </button>
      </div>
      <div className="grid lg:grid-cols-5  ml-12 gap-[20px] lg:w-100%  mt-8">
        {products.map((items) => {
          return (
            <>
              <div className="bg-slate-200" key={items.id}>
                <Link to={`/item/${items.id}`}>
                  <img alt="" src={items.img} />
                </Link>
                <div className="">
                  <h1 className="text-green-400 pl-2 font-serif">
                    {items.brandName}
                  </h1>
                  <h3 className=" font-semibold pl-2">{items.title}</h3>
                  <div className="flex gap-[130px]">
                    <h3 className="pl-2 text-green-400">{items.price}</h3>
                    <div className="flex gap-1">
                      <button
                        className=" order-last mb-3 mr-1  w-[100%] bg-green-400 rounded-full"
                        onClick={() => {
                          const check = !!contextApi.cartItems.some(
                            (Cartitem) => Cartitem.id === items.id
                          );
                          if (check) {
                            alert("Already added");
                          } else {
                            const cartThing = products.find(
                              (product) => product.id === items.id
                            );
                            contextApi.addtoCart(cartThing);
                          }
                        }}
                      >
                        <img alt="" className="p-1 " src="../images/Cart2.svg" />
                      </button>

                      <button
                        className="pb-2 relative"
                        onClick={() => {
                          const check = contextApi.favItems.some(
                            (favitem) => favitem.id === items.id
                          );

                          if (check) {
                            // const removething = products.find(
                            //   (product) => product.id === items.id
                            // );
                            contextApi.removeProductFromFavoriteList(items.id);
                          } else {
                            const FvrtThing = products.find(
                              (product) => product.id === items.id
                            );
                            contextApi.addtoFav(FvrtThing);
                          }
                        }}
                        style={{
                          // backgroundColor: contextApi.favItems.some((favitem) => favitem.id === items.id) ? "red" : ""
                          fill: "red",
                        }}
                      >
                        <svg
                          width="20"
                          height="17"
                          viewBox="0 0 26 23"
                          fill={
                            contextApi.favItems.some(
                              (favitem) => favitem.id === items.id
                            )
                              ? "red"
                              : "none"
                          }
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.5385 1.00015C22.0265 0.981169 25 2.71151 25 8.30445C25 13.8974 12.9999 22 12.9999 22C12.9999 22 1 13.8974 1 8.30445C1 2.71151 3.97343 1.00367 7.46154 1.00015C9.30769 0.998291 11.8478 2.14564 13.0001 3.73927C14.1522 2.14564 16.6716 1.01032 18.5385 1.00015Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        {click && (
          <button className="pl-4" onClick={handleProduct}>
            <img alt="" src="../images/showmore.svg" />
          </button>
        )}
      </div>
    </>
  );
};

export default Items;
