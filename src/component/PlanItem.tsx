import { FaCircleCheck } from "react-icons/fa6";

type PlanItemProps = {
  name: string;
  price: string;
  list: { name: string }[];
  delay: number;
  active: boolean;
  index: number;
  setActiveIdx: React.Dispatch<React.SetStateAction<number>>;
};

const PlanItem = ({
  name,
  price,
  list,
  delay,
  active,
  index,
  setActiveIdx,
}: PlanItemProps) => {
  return (
    <div
      onClick={() => setActiveIdx(index)}
      className={`${
        active ? "bg-neutral-500 text-white" : "bg-neutral-200 text-neutral-500"
      }  px-14 py-20  max-w-[400px] lg:max-w-none w-full cursor-pointer`}
    >
      <div className="text-center ">
        <span
          className={` ${
            active ? "bg-white text-neutral-500" : "bg-neutral-500 text-white"
          }  text-sm inline-block px-5 py-1 `}
        >
          {name}
        </span>
      </div>
      <div className="text-center mt-6 mb-9">
        <h2
          className={` ${
            active ? " text-white" : " text-neutral-500"
          }  h2 text-5xl`}
        >
          {price}
          <span className="text-3xl">$</span>
        </h2>
        <p>/month</p>
      </div>
      <ul className="mb-10 space-y-1">
        {list.map((item, idx) => {
          return (
            <li className="flex items-center gap-2" key={idx}>
              <div
                className={`${
                  active
                    ? "bg-neutral-500 text-white"
                    : "bg-white text-neutral-500"
                }`}
              >
                <FaCircleCheck />
              </div>{" "}
              {item.name}
            </li>
          );
        })}
      </ul>

      <button
        className={`${
          active ? "bg-neutral-200 " : "bg-transparent"
        } block mx-auto py-2 px-6 border border-black text-base font-semibold text-neutral-500 `}
      >
        JOIN NOW
      </button>
    </div>
  );
};

export default PlanItem;
