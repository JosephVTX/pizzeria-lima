import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./Slider.css";

export const Slider = ({ imgArr }) => {
  return (
    <div className="px-[200px] mb-8">
      <Swiper
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 3500 }}
      >
        {imgArr.map((e, i) => (
          <div key={i}>
            <SwiperSlide>
              <img src={e} className="rounded-lg w-full" />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
