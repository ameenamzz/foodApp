import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = (props) => {
  // const [showlist, setShowList] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const { data, showlist, setShowIndex } = props;

  const handleClick = () => {
    // setShowList(!showlist);
    setCollapse(!collapse);
    setShowIndex();
  };

  return (
    <div
      className="w-6/12 mx-auto my-10 py-5 px-5 shadow-lg bg-gray-100 "
      onClick={handleClick}
    >
      <div> 
        <h2></h2>
      </div>
      <div className="flex justify-between cursor-pointer">
        <span className="font-bold text-lg ">
          {data?.title} ({data.itemCards.length})
        </span>
        <span className="" onClick={handleClick}>
          {showlist && collapse ? "⬆️" : "⬇"}
        </span>
      </div>
      {showlist && collapse ? <ItemList items={data?.itemCards} /> : null}
    </div>
  );
};

export default RestaurantCategory;

