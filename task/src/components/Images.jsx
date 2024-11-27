import { useState } from "react";
import AddItems from "./AddItems.jsx";

const Images = ({ image, name, cssClasses, id }) => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(false);
  return (
    <>
      <div className={`w-full flex flex-col items-center `}>
        <img src={image} alt={`images`} className={`${cssClasses}`} />
        <p className={`text-sm md:text-2xl font-mono text-center mt-5`}>
          {name}
        </p>
        <div className={`flex justify-center w-full`}>
          <div
            className={`border-2 bg-white border-green-500 text-green-500 rounded-lg duration-300 flex gap-5 px-5 mx-10 w-full items-center justify-center`}
            key={id}
            onClick={() => setValue(true)}
          >
            {value ? (
              <button
                className={` text-lg md:text-xl w-full`}
                onClick={() => setCount(count - 1)}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
            ) : (
              ""
            )}

            {count > 0 ? (
              <p
                className={`text-green-500 font-mono text-lg md:text-xl cursor-pointer`}
              >
                {count}
              </p>
            ) : (
              <p className={`text-lg text-center cursor-pointer`}>ADD</p>
            )}
            {value ? (
              <button
                className={`text-lg md:text-xl w-full`}
                onClick={() => setCount(count + 1)}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
