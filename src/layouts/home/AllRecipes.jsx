import { useEffect, useState } from "react";
import Badge from "../../components/Badge";
import ViewRecipeBtn from "../../components/viewRecipeBtn";
import SliderCards from "./SliderCards";

const AllRecipes = () => {
  const [active, setActive] = useState("all");

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

  const slides = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/1200x/d9/12/36/d912369defb512a57be219cba3c02646.jpg",
      name: "Savory Herb-Infused Chicken",
      des:
        "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken",
      time: "40 Min - easy prep - 3 serves",
      category: "breakfast",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/01/8a/b5/018ab5380431dc1a6dc892fcc6dbd772.jpg",
      name: "Garlic Butter Rosemary Steak",
      des:
        "Experience the perfect blend of garlic butter and aromatic rosemary with our tender, juicy steak",
      time: "25 Min - medium prep - 2 serves",
      category: "lunch",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/1200x/d5/d6/95/d5d6951bc8083efbbfa9b3e16c56d3c9.jpg",
      name: "Creamy Tuscan Salmon",
      des:
        "Delight in this luxurious creamy salmon dish with sun-dried tomatoes and spinach",
      time: "30 Min - easy prep - 4 serves",
      category: "vegan",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/f8/f2/30/f8f230ab85b5d4f543b0b4dae036f516.jpg",
      name: "Mediterranean Stuffed Bell Peppers",
      des:
        "Enjoy these colorful bell peppers filled with quinoa, feta, and Mediterranean spices",
      time: "45 Min - medium prep - 4 serves",
      category: "desert",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/1200x/4e/88/f2/4e88f2e77e82fd9ab142beaae7ef02b0.jpg",
      name: "Thai Basil Coconut Curry",
      des:
        "Savor the exotic flavors of Thailand with this aromatic coconut curry and fresh basil",
      time: "35 Min - easy prep - 3 serves",
      category: "quick bite",
    },
  ];
  const [filteredData, setFilteredData] = useState(slides);

  const handleFilter = (userClick) => {
    setActive(userClick);

    if (userClick == "all") {
      setFilteredData(slides);
      return;
    }
    console.log(userClick);
    const filter = slides.filter((item) => item.category === userClick);

    setFilteredData(filter);
  };

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

      <div className="flex md:items-center md:justify-center gap-4 px-2 py-3 mt-10 overflow-x-auto px whitespace-nowrap mb-10">
        {foodCategory.map((cat) => (
          <ViewRecipeBtn
            key={cat.id}
            text={cat.name}
            className={`${active === cat.name ? "bg-green-500" : ""}`}
            onClick={() => handleFilter(cat.name)}
          />
        ))}
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((curElem) => (
          <SliderCards key={curElem.id} item={curElem} />
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
