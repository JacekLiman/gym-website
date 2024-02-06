import { faq } from "../data";


import AccordionItem from "./AccordionItem";

const Faq = () => {
  const { title, accordions,icon } = faq;

  return (
    <section className="bg-page">
      <div className="px-5 pt-10 pb-32 relative z-10">
        <div className="text-center ">
          <h2 className="h2">
            {title}
            <span className="text-primary-200">.</span>
          </h2>
        </div>

        <div className="pt-16 flex justify-center">
          <ul className="w-full max-w-[650px] space-y-3">
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
