import { Facebook, Instagram, Menu, Search, X, Youtube } from "lucide-react";
import LogoNavBar from "../../public/images/LogoNavBar.png";
import logo from "../../public/images/LogoNavBar.png";
import { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState("yuvraj");
  return (
    //  mobile navbar
    <div className="relative z-20">
      <div className="p-4">
        <div className="flex justify-between items-center border rounded-full px-4 ">
          <div className="h-10 w-22 overflow-hidden">
            <img
              src={LogoNavBar}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <Menu onClick={() => setIsOpen(true)} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="bg-[#262522] p-4  w-full  flex flex-col  gap-10 absolute top-0 ">
          <div className="flex justify-between items-center px-4">
            <div className="h-6 w-22 overflow-hidden ">
              <img
                src={logo}
                alt=""
                className="h-full w-full object-contain bg-white"
              />
            </div>
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#494744]">
              <X className="text-orange-500" onClick={() => setIsOpen(false)} />
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 w-full">
            <p className="text-white uppercase border-b border-gray-500 pb-2 w-full">
              Home
            </p>
            <p className="text-white uppercase border-b border-gray-500 pb-2 w-full">
              Recipes
            </p>
            <p className="text-white uppercase border-b border-gray-500 pb-2 w-full">
              Cooking tips
            </p>
            <p className="text-white uppercase border-b border-gray-500 pb-2 w-full">
              About us
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 ">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#494744] ">
              <Search className="text-[#f0ebe1] " />
            </div>
            <button className="bg-[#494744] w-[80%] py-2 px-4 rounded-full text-lg font-bold  uppercase text-[#f0ebe1]">
              Subscribe
            </button>
          </div>

          <div className="flex items-center justify-center   gap-8">
            <Facebook className="text-white" size={28} />
            <Instagram className="text-white" size={28} />
            <Youtube className="text-white" size={32} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
