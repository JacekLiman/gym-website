import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

type CommunitySliderProps = {
  testimonials: {
    image: string;
    name: string;
    message: string;
  }[];
};

const CommunitySlider = ({ testimonials }: CommunitySliderProps) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={true}
      slidesPerView={2}
      spaceBetween={10}
      breakpoints={{
        768: { slidesPerView: 3 },
      }}
    >
      {testimonials.map((testimonial, idx) => {
        const { image, name, message } = testimonial;
        return (
          <SwiperSlide key={idx} className="relative">
            <img className="w-full" src={image} alt="" />
            <div className="p-3 text-center absolute bottom-5 left-0 w-full  text-white">
              <p className="italic text-base font-light">{message}</p>
              <h3 className="text-white mt-5">
                <span className="text-primary-200">~</span> {name}
              </h3>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CommunitySlider;
