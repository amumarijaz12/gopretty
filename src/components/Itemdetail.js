import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import  { Context}  from "../store/Context";

const products = [
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
];

const Itemdetail = () => {
  const { id } = useParams();
  const selecteditem = products[id - 1];
  const contextApi = useContext(Context);
  return (
    <>
      <Navbar />

      <div className=" lg:flex lg:w-80% ">
        <img alt="" className="lg:ml-24 lg:mt-24 lg:h-[340px]" src={selecteditem.img} />
         <div className="lg:mt-44 ">
        <h1 className=" pl-2 text-wrap text-xl gap-1 font-serif lg:flex">
        <h1 className="text-black lg:text-xl  font-bold flex "> BrandName: </h1> {selecteditem.brandName}
        </h1>
        <h3 className=" font-semibold text-wrap text-xl lg:flex md:flex pl-2 gap-1"><h1 className="text-black font-bold">Title:</h1>{selecteditem.title}</h3>
        <h3 className="pl-2   text-wrap text-xl lg:flex md:flex gap-1"><h1 className="text-black font-bold">Price:</h1>{selecteditem.price}</h3>
        <button className="bg-green-300 p-2 ml-8 mt-8 text-white rounded-lg" 
        onClick={()=>
        {
            const check =!! (contextApi.cartItems.find((items)=>items.id=id));
            if(check){
                alert("Already added");
            }
            else{
            const cartthing = products[id-1];
             contextApi.addtoCart(cartthing);
             console.log("cart items",contextApi.cartItems)
            }
            }}
        >
            Add to Cart
        </button>
        </div>
      </div>

    </>
  );
};

export default Itemdetail;
