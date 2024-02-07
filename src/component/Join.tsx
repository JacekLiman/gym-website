import { join } from "../data";

const Join = () => {
  const { image, subtitle, btnText } = join;
  return (
    <section className="bg-neutral-500 section">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          <div className="hidden md:block "></div>
          <div data-aos="fade-left"
              data-aos-delay="200"  className="md:pt-20 pt-32 pl-5 md:pl-0 relative z-10">
            <h2 className="h2 text-white">
              Wannna join <span className="text-primary-200">&</span> <br />{" "}
              have fun?
            </h2>
            <p className="text-white md:text-body-md max-w-[500px] mt-6 mb-10">
              {subtitle}
            </p>
            <button className="btn btn-sm btn-secondary">{btnText}</button>
          </div>
          <div className="absolute w-[250px] -top-[90px] md:left-1/2 lg:w-[450px] md:-translate-x-[90%]">
            
            <img
              data-aos="fade-right"
              data-aos-delay="200"
             
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
