import { workouts } from "../data";

import WorkoutSlider from "./WorkoutSlider";

const Workout = () => {
  const { title, icon } = workouts;

  return (
    <section className="section bg-page">
      <div className="section-title-group justify-center">
        <img src={icon} alt="" />
        <h2 className="h2 section-title ">
          {title}
          <span className="text-primary-200">.</span>
        </h2>
      </div>

      <div>
        <WorkoutSlider />
      </div>
    </section>
  );
};

export default Workout;
