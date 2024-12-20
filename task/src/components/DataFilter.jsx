import Images from "./Images.jsx";
import { useEffect, useState } from "react";

const DataFilter = ({ data }) => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    setFood(data);
  }, [data]);
  const filter = (itemData) => {
    let filteredData = data.filter((item) => item.category === itemData);
    setFood(filteredData);
  };
  // function showFood(value) {
  //   setFilter(value);
  //   console.log(setFilter(value));
  // };
  return (
    <>
      <div>
        <div className={`flex gap-12 justify-center mt-12`}>
          <button
            className={`border-2 rounded-lg h-[6vh] w-[15vh] font-sans bg-red-500 text-white focus:bg-red-900 focus:border-black`}
            onClick={() => filter("non-veg")}
          >
            Non-veg
          </button>
          <button
            className={`border-2 rounded-lg h-[6vh] w-[15vh] font-sans bg-[#1ba672] text-white focus:bg-green-900 focus:border-black`}
            onClick={() => filter("veg")}
          >
            Veg
          </button>
          <button
            className={`border-2 rounded-lg h-[6vh] w-[15vh] font-sans bg-amber-400 text-white focus:bg-amber-800 focus:border-black`}
            onClick={() => setFood(data)}
          >
            Show-all
          </button>
        </div>
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-14 mb-12`}>
          {food.map((data) => (
            <Images
              key={data.id}
              {...data}
              cssClasses={` flex flex-col w-full mt-5 size-44 md:size-72 object-cover rounded-lg justify-center`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DataFilter;
