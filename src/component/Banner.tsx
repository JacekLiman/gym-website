import { banner } from "../data";

const Banner = () => {
  const { titlePart1, titlePart2, subtitle, textBtn } = banner;
  return (
    <section className="bg-neutral-500">
      <div className="container mx-auto">
        <div className="flex h-[790px] relative">
          <div className="w-1/3 lg:w-1/2"></div>
          <div className="w-2/3 lg:w-1/2 bg-banner bg-cover bg-center"></div>
          <div className="absolute top-1/2 left-2 -translate-y-1/2">
            <div className="flex flex-col gap-7 items-start">
              <h1 className="text-white h1 max-w-[350px] md:max-w-[550px]">
                {titlePart1} <br />
                <span className="text-primary-200">{titlePart2}</span>
              </h1>
              <p className="text-body-md lg:text-body-lg max-w-[350px] md:max-w-[550px] text-white">
                {subtitle}
              </p>
              <button className="btn btn-secondary btn-sm lg:btn-lg">
                {textBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
