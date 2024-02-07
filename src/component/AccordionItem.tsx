import { useState } from "react";

import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

type AccordionItemProps = {
  question: string;
  answer: string;
};

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className=" items-center px-6 py-4 bg-white border text-black">
      <div className="flex justify-between items-center">
        <p className="font-bold">{question}</p>
        <button
          onClick={() => setIsActive((prev) => !prev)}
          className="text-[18px]"
        >
          { isActive ? <FaChevronCircleUp/> :<FaChevronCircleDown /> }
        </button>
      </div>
      <p
        className={` ${
          isActive ? "max-h-[100px] my-6" : "max-h-0 my-0"
        } text-sm  overflow-hidden transition-all duration-300`}
      >
        {answer}
      </p>
    </li>
  );
};

export default AccordionItem;
