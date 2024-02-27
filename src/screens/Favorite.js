import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Context } from "../store/Context";
import { Link } from "react-router-dom";

const Favorite = () => {
  const contextApi = useContext(Context);
  return (
    <>
      <Navbar />
      <div className="pt-12">
        {contextApi.favItems.length > 0 && (
          <>
            <h1 className=" text-center text-4xl ">Favorite Items</h1>
          </>
        )}
      </div>
      <div className="lg:grid lg:grid-cols-4 ">
        {contextApi.favItems.map((Items, id) => {
          return (
            <>
              <div className="mt-8 pt-24  ml-3">
                <img className="" key={id} src={Items.img} />
                <div className="rounded-md">
                  <div className="mt-4">
                    <h1>{Items.brandName}</h1>
                    <h1>{Items.title}</h1>
                    <h1>{Items.price}</h1>
                  </div>
                  <button
                    className="bg-green-300 mt-4 text-white rounded-lg p-2"
                    onClick={() => contextApi.removeProductFromFavoriteList(Items.id)}
                  >
                    Remove From Favorite
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {contextApi.favItems.length == 0 && (
        <>
          <div className="  h-screen flex items-center justify-center ">
            <div>
              <h1 className=" text-4xl ">Nothing add into the favorites.</h1>
              <h1 className="ml-3">(Please add something to the favorites.)</h1>
              <Link to="/Product">
                <button className="mt-4 ml-3 justify-center items-center bg-green-200 hover:bg-green-400 p-2 rounded">
                  Move back
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
      {contextApi.favItems.length > 0 && (
        <>
          <div className=" ml-[120px] mb-[120px]">
            <Link to="/Checkout">
              <button className="bg-green-300 rounded text-white p-2 mt-6 ml-[120px]">
                Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Favorite;
