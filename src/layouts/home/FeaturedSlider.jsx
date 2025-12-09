import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
const FeaturedSlider = () => {
  return (
    <>
      <div className="relative">
        <button className="prevBtn absolute top-1/2 left-2 z-10 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full">
          Prev
        </button>
        <button className="nextBtn absolute top-1/2 right-2 z-10 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full">
          Next
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".prevBtn",
            nextEl: ".nextBtn",
          }}
          spaceBetween={20}
          slidesPerView={2}
          slidesPerGroup={2}
          loop={true}
          className="rounded-xl"
        >
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/1200x/15/aa/ca/15aacaa94a0fdf6a9ab35be27ca87d3a.jpg"
              className="w-full h-64 object-cover rounded-xl"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://i.pinimg.com/1200x/16/5e/cb/165ecb393c31a55f6db69ae4bac34091.jpg"
              className="w-full h-64 object-cover rounded-xl"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://i.pinimg.com/736x/2e/78/20/2e7820e25e16cda4719092029dd78588.jpg"
              className="w-full h-64 object-cover rounded-xl"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default FeaturedSlider;
