// import { useState } from "react";
import "./App.css";
import SliderImages from "./components/SliderImages.jsx";
import DataFilter from "./components/DataFilter.jsx";
import { useEffect, useState } from "react";
import AddItems from "./components/AddItems.jsx";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/SliderData.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div>
        <SliderImages data={data} />
        <DataFilter data={data} />
      </div>
    </>
  );
}

export default App;
