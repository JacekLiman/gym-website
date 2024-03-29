import { faq } from "../data";


import AccordionItem from "./AccordionItem";

const Faq = () => {
  const { title, accordions,icon } = faq;

  return (
    <section className="bg-page pt-10 pb-40 ">
      <div className="px-5 relative z-10">
        <div data-aos='fade-up' data-aos-offset='200' data-aos-delay='200' className="text-center ">
          <h2 className="h2">
            {title}
            <span className="text-primary-200">.</span>
          </h2>
        </div>

        <div className="pt-16 flex justify-center">
          <ul data-aos='fade-up' data-aos-delay='200' data-aos-offset='300' className="w-full max-w-[650px] space-y-3">
            {accordions.map((accordion, idx) => {
              const { question, answer } = accordion;
              return <AccordionItem key={idx} question={question} answer={answer}  />;
            })}
          </ul>
        </div>
        <img className="w-[400px] top-0 left-1/2 absolute -translate-x-1/2 -z-10" src={icon} alt="" />
      </div>
    </section>
  );
};

export default Faq;
