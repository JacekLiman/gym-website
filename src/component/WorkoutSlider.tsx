import { workouts } from "../data";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "../workoutSlider.css";

import { Navigation } from "swiper/modules";

const WorkoutSlider = () => {
  const { programs } = workouts;

  return (
    <Swiper
      className="workoutSlider"
      slidesPerView={2}
      spaceBetween={30}
      navigation={true}
      breakpoints={{
        768: { slidesPerView: 3 },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
    >
      {programs.map((program, idx) => {
        const { image, name } = program;
        return (
          <SwiperSlide
            className="max-w-[320px]  relative"
            key={idx}
          >
            <img className="w-full object-cover" src={image} alt="" />
            <div className="absolute left-[20px] bottom-[20px] bg-white px-[14px] rounded-[1px]">
              <div className="font-primary font-semibold text-sm ">{name}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkoutSlider;
