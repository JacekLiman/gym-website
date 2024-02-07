import { useState } from "react";
import { pricing } from "../data";

import PlanItem from "./PlanItem";

const Pricing = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const { icon, title, plans } = pricing;

  

  return (
    <section className="bg-page section  px-5 xl:px-20">
      <div data-aos='fade-up' data-aos-delay='200' className="section-title-group justify-center">
        <img src={icon} alt="" />
        <h2 className="h2 ">
          {title}
          <span className="text-primary-200">.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center  ">
        {plans.map((plan, idx) => {
          const { name, price, list, delay } = plan;
          return (
            <PlanItem
              key={idx}
              name={name}
              price={price}
              list={list}
              delay={delay}
              active={activeIdx === idx ? true : false}
              setActiveIdx = {setActiveIdx}
              index = {idx}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
