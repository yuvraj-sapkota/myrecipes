import { ChevronLeft, ChevronRight } from "lucide-react";
import SliderCards from "./SliderCards";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturedSlider = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/1200x/d9/12/36/d912369defb512a57be219cba3c02646.jpg",
      name: "Savory Herb-Infused Chicken",
      des:
        "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken",
      time: "40 Min - easy prep - 3 serves",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/01/8a/b5/018ab5380431dc1a6dc892fcc6dbd772.jpg",
      name: "Garlic Butter Rosemary Steak",
      des:
        "Experience the perfect blend of garlic butter and aromatic rosemary with our tender, juicy steak",
      time: "25 Min - medium prep - 2 serves",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/1200x/d5/d6/95/d5d6951bc8083efbbfa9b3e16c56d3c9.jpg",
      name: "Creamy Tuscan Salmon",
      des:
        "Delight in this luxurious creamy salmon dish with sun-dried tomatoes and spinach",
      time: "30 Min - easy prep - 4 serves",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/f8/f2/30/f8f230ab85b5d4f543b0b4dae036f516.jpgs",
      name: "Mediterranean Stuffed Bell Peppers",
      des:
        "Enjoy these colorful bell peppers filled with quinoa, feta, and Mediterranean spices",
      time: "45 Min - medium prep - 4 serves",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/1200x/4e/88/f2/4e88f2e77e82fd9ab142beaae7ef02b0.jpg",
      name: "Thai Basil Coconut Curry",
      des:
        "Savor the exotic flavors of Thailand with this aromatic coconut curry and fresh basil",
      time: "35 Min - easy prep - 3 serves",
    },
  ];

  return (
    <>
      <div className="pt-10 px-4 pb-4 mb-20">
        <div className="flex flex-col md:flex-row md:justify-between gap-6  mb-10">
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

        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          navigation={{ prevEl: ".preBtn", nextEl: ".nextBtn" }}
          spaceBetween={20}
          breakpoints={{ 740: { slidesPerView: 2 } }}
        >
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <SliderCards item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default FeaturedSlider;
