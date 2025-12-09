import { Facebook, Instagram, Menu, Search, X, Youtube } from "lucide-react";
import LogoNavBar from "../../public/images/LogoNavBar.png";
import logo from "../../public/images/LogoNavBar.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuList = [
    {
      id: 1,
      menuName: "Home",
      path: "/",
    },
    {
      id: 2,
      menuName: "Recipes",
      path: "/recipes",
    },
    {
      id: 3,
      menuName: "Cooking tips",
      path: "/cooking",
    },
    {
      id: 4,
      menuName: "About us",
      path: "/about",
    },
  ];
  return (
    //  mobile navbar
    <div className="relative z-20 ">
      <div className="py-4">
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
        <div className="bg-[#262522] h-screen p-4  w-[80%] right-0  flex flex-col  gap-10 absolute top-0 ">
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
            {menuList.map((list) => (
              <Link
                to={list.path}
                onClick={() => setIsOpen(false)}
                key={list.id}
                className="text-white uppercase border-b border-gray-500 pb-2 w-full"
              >
                {list.menuName}
              </Link>
            ))}
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
