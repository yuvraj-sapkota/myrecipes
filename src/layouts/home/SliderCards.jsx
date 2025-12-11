import ViewRecipeBtn from "../../components/viewRecipeBtn";

const SliderCards = ({ item }) => {
  return (
    <>
      <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-md">
        <div className="w-full h-64 sm:h-80   overflow-hidden">
          <img
            className="h-full w-full object-cover object-center"
            src={item.image}
            alt=""
          />
        </div>
        <div className="p-4 bg-white">
          <h2 className="font-bold text-[#25222] uppercase text-xl ">
            {item.name}
          </h2>
          <p className="text-sm mt-3 mb-10 font-light text-[#262522]">
            {item.des}
          </p>
          <h4 className="uppercase font-semibold text-[#262522]  text-sm mb-4">
            {item.time}
          </h4>
          <ViewRecipeBtn text="View Recipe" />
        </div>
      </div>
    </>
  );
};

export default SliderCards;
