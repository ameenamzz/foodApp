import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UsesrContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = resData.info;
  const { loggedInUser } = useContext(UsesrContext);

  return (
    <div className="w-70 mx-7 my-10 pb-4 p-6 bg-gray-200 hover:bg-gray-300 rounded-lg">
      <img className="pb-3" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-extrabold">{name}</h3>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>Rating: {avgRating}</h3>
      <h3>{costForTwo}</h3>
      <h3>delivery time: {deliveryTime}</h3>
      <h3>{loggedInUser}</h3>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    <div>
      <label>Promoted</label>
      <RestaurantCard {...props} />
    </div>;
  };
};

export default RestaurantCard;
