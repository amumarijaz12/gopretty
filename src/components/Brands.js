import React, { useState } from "react";

const Brands = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlides, setCurrentSlides] = useState(1);
  const [currentSlid, setCurrentSlid] = useState(2);
  const [allbrands, setAllBrands] = useState([
    {
      brand: "The Ordinary",
      discount: "upto 80 % off",
      image: "../images/ord.svg",
    },
    {
      brand: "The Body Shop",
      discount: "All Items 20 % off",
      image: "../images/bdy.svg",
    },
    {
      brand: "Bath and Body Works",
      discount: "upto 50 % off",
      image: "../images/bthnbdy.svg",
    },
  ]);

  function viewAllBrands() {
    setAllBrands((prevBrands) => [...prevBrands, ...prevBrands]);
  }

  const handleCarouselClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % allbrands.length);
  };
  const handleCarouselClick1 = () => {
    setCurrentSlides((prevSlide) => (prevSlide + 1) % allbrands.length);
  };
  const handleCarouselClick2 = () => {
    setCurrentSlid((prevSlide) => (prevSlide + 1) % allbrands.length);
  };

  return (
    <>
      <div className="lg:flex justify-between mt-8 p-4 bg-slate-200">
        <h1 className="text-2xl text-nowrap lg:pl-10  font-serif">Top Brands</h1>
        <button
          onClick={viewAllBrands}
          className="order-last  text-nowrap font-semibold hover:underline text-slate-400 hover:text-white"
        >
          View All Brands
        </button>
      </div>

      <div className="bg-[#f0d3c3] lg:pt-4">
        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 justify-center ">
          {[currentSlide, currentSlides, currentSlid].map((index, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-2 bg-[#f0d3c3] text-center"
            >
              <h1 className="font-bold mb-2">{allbrands[index].brand}</h1>
              <div className="flex mb-2 ">
                <img alt="" src={allbrands[index].image} className="w-full h-full" />
                <button
                  className=" top-1/2 right-1"
                  onClick={i === 0 ? handleCarouselClick : i === 1 ? handleCarouselClick1 : handleCarouselClick2}
                >
                  <img alt="Next Slide" src="../images/arrbtn.svg" className="w-8 h-8" />
                </button>
              </div>
              <div className="text-green-600">
                <h1>{allbrands[index].discount}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Brands;
