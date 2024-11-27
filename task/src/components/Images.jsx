import { useState } from "react";
import AddItems from "./AddItems.jsx";

const Images = ({ image, name, cssClasses, id }) => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(false);
  return (
    <>
      <div className={`w-full flex flex-col items-center `}>
        <img src={image} alt={`images`} className={`${cssClasses}`} />
        <p className={`text-sm md:text-2xl w-full font-sans text-center mt-5`}>
          {name}
        </p>
        <div className="flex justify-center w-full">
          <div
            className="border-2 bg-white border-[#1ba672] text-[#1ba672] rounded-lg duration-300 flex gap-5 px-5 mx-10 w-full items-center justify-center mt-2"
            onClick={() => {
              setCount(1);
              setValue(true);
            }}
          >
            {value && count > 0 && (
              <div className={`flex gap-5`}>
                <button
                  className="text-lg md:text-xl w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCount(count - 1);
                  }}
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <p className="text-[#1ba672] font-mono text-lg md:text-xl cursor-pointer">
                  {count}
                </p>
                <button
                  className="text-lg md:text-xl w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCount(count + 1);
                  }}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            )}

            {count === 0 && (
              <p className="text-lg text-center cursor-pointer">ADD</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
