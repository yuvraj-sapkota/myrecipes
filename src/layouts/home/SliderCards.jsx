import ViewRecipeBtn from "../../components/viewRecipeBtn";

const SliderCards = () => {
  return (
    <>
      <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-md">
        <div className="w-full h-64 sm:h-80   overflow-hidden">
          <img
            className="h-full w-full object-cover object-center"
            src="https://i.pinimg.com/1200x/d9/12/36/d912369defb512a57be219cba3c02646.jpg"
            alt=""
          />
        </div>
        <div className="p-4 bg-white">
          <h2 className="font-bold text-[#25222] uppercase text-xl ">
            Savory Herb-Infused Chicken
          </h2>
          <p className="text-sm mt-3 mb-10 font-light text-[#262522]">
            Indulge in the rich and savory symphony of flavors with our Savory
            Herb-Infused Chicken
          </p>
          <h4 className="uppercase font-semibold text-[#262522]  text-sm mb-4">
            40 Min - easy prep - 3 serves
          </h4>
          <ViewRecipeBtn text="View Recipe" />
        </div>
      </div>
    </>
  );
};

export default SliderCards;
