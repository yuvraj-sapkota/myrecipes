import { HandPlatter, Pizza, Salad, Soup } from "lucide-react";
import React from "react";

const ExploreSection = () => {
  const menuRoutine = [
    {
      id: 1,
      routineIcon: Salad,
      routineName: "Breakfast",
    },
    {
      id: 2,
      routineIcon: HandPlatter,
      routineName: "lunch",
    },
    {
      id: 3,
      routineIcon: Pizza,
      routineName: "dinner",
    },
    {
      id: 4,
      routineIcon: Soup,
      routineName: "dessert",
    },
    {
      id: 5,
      routineIcon: Salad,
      routineName: "qucik bite",
    },
  ];
  return (
    <div className="px-4 ">
      <div className="bg-[#c4e5fc] py-10 px-6 rounded-xl flex flex-col md:flex-row gap-16 md:gap-[238px]">
        <div className="md:w-1/2  md:pt-40 ">
          <button className="bg-[#ee6352] text-white px-4 py-1 rounded-xl uppercase">
            Explore
          </button>
          <h1 className="text-2xl font-bold uppercase mb-3 mt-2 md:text-5xl">
            Our Diverse palette
          </h1>
          <p className="text-sm md:text-base  text-[#262522cc] font-light mb-10">
            If you are a breakfast enthusiast, a connoisseur of savory delights,
            or on the lookout for irresistible desserts, our curated selection
            has something to satisfy every palate.
          </p>
          <button className="uppercase border border-gray-500 rounded-full px-4 py-1">
            See more
          </button>
        </div>

        <div className="md:w-1/2 md:py-10">
          {menuRoutine.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b border-gray-400 items-center pb-4 mb-4"
            >
              <item.routineIcon size={40} />
              <p className="uppercase text-base md:text-xl text-[#262522] font-semibold">
                {item.routineName}
              </p>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default ExploreSection;
