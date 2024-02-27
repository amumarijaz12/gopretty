import React from "react";
import { Link } from "react-router-dom";

const Completed = () => {
  return (
    <>
      <div className=" h-screen flex gap-3 items-center justify-center">
        <h1 className="text-white  bg-green-400 text-center rounded-md text-4xl p-2">
          Congratulations! your order have been confirmed.
        </h1>
        <Link to="/">
        <button className=" bg-green-400 p-2 rounded">
          Go Back
        </button>
      </Link>
      </div>
     
    </>
  );
};

export default Completed;
