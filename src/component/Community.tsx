import { community } from "../data";
import CommunitySlider from "./CommunitySlider";

const Community = () => {
  const { icon, title, testimonials } = community;
  return (
    <section className="bg-page section xl:pl-20">
      <div>
        <div className="flex flex-col xl:flex-row">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="section-title-group mx-auto xl:mx-0 xl:w-1/3 xl:pl-0 "
          >
            <img src={icon} alt="" />
            <h2 className="h2">
              {title}
              <span className="text-primary-200">.</span>
            </h2>
          </div>
          <div data-aos='fade-left' data-aos-delay='300' className="xl:w-2/3">
            <CommunitySlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
