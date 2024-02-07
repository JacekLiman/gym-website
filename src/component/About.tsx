import { about } from "../data";

import { IoIosArrowDroprightCircle } from "react-icons/io";

const About = () => {
  const { title, subtitle1, subtitle2, icon, link } = about;

  return (
    <section className="py-20 md:py-24 bg-page">
      <div className="container mx-auto px-5 lg:px-32">
        <div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="section-title-group"
          >
            <img src={icon} alt="" />
            <h2 className="h2">
              {title}
              <span className="text-primary-200">.</span>{" "}
            </h2>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="md:text-body-md"
          >
            {subtitle1}
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="md:text-body-md mt-8 mb-6"
          >
            {subtitle2}
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <a
              className="link flex items-center gap-3 hover:gap-x-6 transition-all"
              href="#"
            >
              {link} <IoIosArrowDroprightCircle className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
