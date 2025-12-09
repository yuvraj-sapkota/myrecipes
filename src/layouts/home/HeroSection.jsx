import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="px-4 mb-4">
        <div
          className="relative bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
             bg-cover bg-center h-64 md:h-96 w-full flex items-center justify-center mt-4 rounded-2xl overflow-hidden "
        >
          <div className="absolute top-0 h-full w-full bg-black/70"></div>
          <div className=" z-10 px-4  md:w-1/2  md:text-center lg:w-1/3 ">
            <h1 className="font-bold text-white text-2xl md:text-4xl mb-4 uppercase">
              Unleash Culinary Excellence
            </h1>
            <p className="text-gray-400 text-sm mb-10 md:px-10">
              Explore a world of flavors, discover handcrafted recipes, and let
              the aroma of our passion for cooking fill your kitchen
            </p>
            <button className="bg-orange-500 px-10 py-2 rounded-lg ">
              Explore recipes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
