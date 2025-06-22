import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = (props) => {
  const { items } = props;
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));

  };

  return (
    <div>
      {items.map((list) => {
        return (
          <div
            key={list.card.info.id}
            className="flex  border-b-1 border-b-gray-300 py-4"
          >
            <div className="flex flex-col text-left">
              <span className="font-bold text-base">
                {list?.card?.info?.name}
              </span>
              <span className="font-semibold">
                ₹{" "}
                {list?.card?.info?.price / 100 ||
                  list?.card?.info?.defaultPrice / 100}
              </span>
              <span>{list.card?.info?.ratings?.aggregatedRating?.rating}</span>
              <span className="w-130 text-sm mt-6">
                {list.card?.info?.description}
              </span>
            </div>
            <div className="">
              <img
                className="w-45 ml-12 rounded-2xl"
                src={CDN_URL + list.card?.info?.imageId}
                alt=""
              ></img>
              <button
                className="bg-white px-8 py-2 ml-10 text-green-600 font-bold rounded-xl border-1 border-gray-300 relative cursor-pointer"
                onClick={() => handleAddItem(list)}
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
