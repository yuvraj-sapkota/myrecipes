import { useEffect, useState } from "react";
import Badge from "../../components/Badge";
import ViewRecipeBtn from "../../components/viewRecipeBtn";
import SliderCards from "./SliderCards";

const AllRecipes = () => {
  //   const [active, setActive] = useState("all");
  const foodCategory = [
    {
      id: 1,
      name: "all",
    },
    {
      id: 2,
      name: "vegan",
    },
    {
      id: 3,
      name: "breakfast",
    },
    {
      id: 4,
      name: "lunch",
    },
    {
      id: 5,
      name: "dinner",
    },
    {
      id: 6,
      name: "desert",
    },
    {
      id: 7,
      name: "quick bite",
    },
  ];

  return (
    <div className="px-4">
      <div className="md:text-center">
        <Badge text="Recipe" />
        <h2 className="text-2xl font-bold mt-2 mb-3">Embark on a journey!</h2>
        <p className="text-sm">
          With our diverse collection of recipes we have somethings to satisfy
          every palate.
        </p>
      </div>

      <div className="flex md:items-center md:justify-center gap-4 px-2 py-3 mt-10 overflow-x-auto px whitespace-nowrap ">
        {foodCategory.map((cat) => (
          <ViewRecipeBtn key={cat.id} text={cat.name} />
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
