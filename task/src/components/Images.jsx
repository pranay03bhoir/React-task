import { useState } from "react";

const Images = ({ image, name, cssClasses, id }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className={`w-full flex flex-col items-center `}>
        <img src={image} alt={`images`} className={`${cssClasses}`} />
        <p className={`text-2xl font-mono text-center mt-5`}>{name}</p>
        <button
          className={`p-2  border-2 bg-green-400 text-white rounded-lg`}
          onClick={() => setCount(count + 1)}
          key={id}
        >
          {count > 0 ? (
            <p className={`text-white font-mono text-lg`}>
              {count} {name} added
            </p>
          ) : (
            "ADD"
          )}
        </button>
      </div>
    </>
  );
};

export default Images;
