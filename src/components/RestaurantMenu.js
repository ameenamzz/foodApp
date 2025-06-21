// import { useEffect, useState } from "react";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./shimmer";
import { useParams } from "react-router";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = resInfo.cards[2].card.card.info;

  //resInfo.cards?find((c)=>c?.card?.card?.info).card?.card?.info;
  // resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
  //       (c) => c?.card?.card?.itemCards
  //     )?.card?.card;

  // const { itemCards } = resInfo.cards
  //   ?.find((card) =>
  //     card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.some(
  //       (c) => c?.card?.card?.itemCards
  //     )
  //   )
  //   ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
  //     (c) => c?.card?.card?.itemCards
  //   )?.card?.card;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (c) => c?.card?.card?.itemCards
    )?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("catergories", categories);

  return (
    <div className="text-center mt-10">
      <h1>{name}</h1>
      <p>Cuisines: {cuisines.join(" , ")}</p>
      <p>Rating:{avgRating}</p>
      <div className="mt-8">
        <h2>Menu</h2>

        <h4>
          {categories.map((category, index) => {
            return (
              <RestaurantCategory
                key={category?.card?.card?.categoryId}
                data={category?.card?.card}
                showlist={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
              />
            );
          })}
        </h4>
      </div>
    </div>
  );
};

export default RestaurantMenu;
