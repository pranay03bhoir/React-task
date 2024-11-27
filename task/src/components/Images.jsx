import { useState } from "react";

const Images = ({ image, name, cssClasses, id }) => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(false);
  return (
    <>
      <div className={`w-full flex flex-col items-center `}>
        <img src={image} alt={`images`} className={`${cssClasses}`} />
        <p className={`text-md md:text-2xl font-mono text-center mt-5`}>
          {name}
        </p>
        <div className={`flex justify-center w-[100%]`}>
          <div
            className={`border-2 bg-white border-green-500 text-green-500 rounded-lg duration-300 flex gap-5 px-5 mx-10 w-[100%] items-center justify-center`}
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
              <p className={`text-green-500 font-mono text-lg md:text-xl`}>
                {count}
              </p>
            ) : (
              "ADD"
            )}
            {value ? (
              <button
                className={`text-lg md:text-xl`}
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
