import React, { useState } from "react";

const Brands = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlides, setCurrentSlides] = useState(1);
  const [currentSlid, setCurrentSlid] = useState(2);
  const [allbrands,setallbrands] = useState([
     
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
    ]
  )
  function viewallbrands (){
    setallbrands((allbrand)=> [...allbrand , ...allbrand]);
   
  }
  const handleCarouselClick = () => {
    // Increment current slide index
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Assuming you have 3 slides
  };
  const handleCarouselClick1 = () => {
    // Increment current slide index
    setCurrentSlides((prevSlide) => (prevSlide + 1) % 3); // Assuming you have 3 slides
  };
  const handleCarouselClick2 = () => {
    // Increment current slide index
    setCurrentSlid((prevSlide) => (prevSlide + 1) % 3); // Assuming you have 3 slides
  };
  

  return (
    <>
      <div className="lg:flex justify-between mt-8 bg-slate-200">
        <h1 className=" text-2xl text-nowrap static pl-8 p-4 font-serif">
          Top Brands
        </h1>
        <button onClick={viewallbrands}
         className=" order-last pr-4 pl-8 text-nowrap font-semibold hover:underline text-slate-400 hover:text-white" onClick={viewallbrands}>
          View All Brands
        </button>
      </div>
 {/* <div className="lg:grid lg:grid-cols-3">
     {
      
      allbrands.map((product)=>{
       return(  
      <div className="bg-[#CDA792] ">
        <div className="  lg:pl-24 pl-4 text-center justify-center">
          <div className="pt-10">
            <h1 className="font-bold pr-24">{product.brand}</h1>
            <div className="flex">
              <img alt='' src={product.image} />
              <button className="carousel" onClick={handleCarouselClick}>
                <img alt="" src="../images/arrbtn.svg" />
              </button>
            </div>
            <div className="text-white text-center mr-14">
              <h1 className="text-white ">{product.discount}</h1>
            </div>
          </div>
        </div>
        </div>
        
       )
     })} */}
    

 <div className="grid grid-cols-3"></div>
      <div className="bg-[#CDA792] ">
        <div className="lg:grid lg:grid-cols-3  lg:pl-24 pl-4 text-center justify-center">
          <div className="pt-10">
            <h1 className="font-bold pr-24">{allbrands[currentSlide].brand}</h1>
            <div className="flex">
              <img alt="" src={allbrands[currentSlide].image} />
              <button className="carousel" onClick={handleCarouselClick}>
                <img alt="" src="../images/arrbtn.svg" />
              </button>
            </div>
            <div className="text-white text-center mr-14">
              <h1 className="text-white ">{allbrands[currentSlide].discount}</h1>
            </div>
          </div>
          <div className="pt-10">
            <h1 className="font-bold pr-24">{allbrands[currentSlides].brand}</h1>
            <div className="flex">
              <img  alt='' src={allbrands[currentSlides].image} />
              <button className="carousel" onClick={handleCarouselClick1}>
                <img alt="" src="../images/arrbtn.svg" />
              </button>
            </div>
            <div className="text-white text-center mr-14">
              <h1 className="text-white ">{allbrands[currentSlides].discount}</h1>
            </div>
          </div>
          <div className="pt-10">
            <h1 className="font-bold pr-24">{allbrands[currentSlid].brand}</h1>
            <div className="flex">
              <img alt='' src={allbrands[currentSlid].image} />
              <button className="carousel" onClick={handleCarouselClick2}>
                <img alt='' src="../images/arrbtn.svg" />
              </button>
            </div>
            <div className="text-white text-center mr-14">
              <h1 className="text-white ">{allbrands[currentSlid].discount}</h1>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Brands;
