import { ChevronLeft, ChevronRight } from "lucide-react";
import SliderCards from "./SliderCards";

const FeaturedSlider = () => {
  return (
    <>
      <div className="pt-10 px-4 pb-4 border">
        <div className="flex flex-col md:flex-row md:justify-between gap-6 border mb-10">
          <h1 className="text-[#262522] text-2xl md:text-4xl font-bold uppercase">
            Featured recipes
          </h1>
          <div className="space-x-2">
            <button className="preBtn border border-black p-1 rounded-full">
              <ChevronLeft size={24} />
            </button>
            <button className="nextBtn border border-black p-1 rounded-full">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <SliderCards />
      </div>
    </>
  );
};

export default FeaturedSlider;
