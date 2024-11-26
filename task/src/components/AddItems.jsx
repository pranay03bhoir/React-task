import { useState } from "react";

const AddItems = ({ count }) => {
  return (
    <>
      <div className={`text-center mt-5 w-full bg-green-700 items-center`}>
        <p className={`text-white h-[5vh] text-3xl font-mono`}>
          {count} item added
        </p>
      </div>
    </>
  );
};

export default AddItems;
