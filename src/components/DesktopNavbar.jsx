import { Search } from "lucide-react";
import LogoNavBar from "../../public/images/LogoNavBar.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const DesktopNavbar = () => {
  const [active, setActive] = useState("Home");
  console.log(active);

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
    <div>
      <div className="flex justify-between items-center border rounded-full px-4 mt-4">
        <div className="h-15 w-28 overflow-hidden">
          <img
            src={LogoNavBar}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex items-start gap-4 ">
          {menuList.map((list) => (
            <Link
              to={`${list.path}`}
              key={list.id}
              onClick={() => setActive(`${list.menuName}`)}
              className={`cursor-pointer uppercase text-sm ${
                active === `${list.menuName}`
                  ? "border-b-4  border-orange-500 text-black"
                  : "text-gray-500"
              }`}
            >
              {list.menuName}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-between gap-4 ">
          <div className="p-2 flex items-center justify-center rounded-full bg-[#9a9a9a] ">
            <Search className="text-[#f0ebe1] " />
          </div>
          <button className="bg-black w-[80%] py-1 px-4 rounded-full text-base font-normal uppercase text-[#f0ebe1]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
