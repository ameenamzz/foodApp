import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UsesrContext from "../utils/UserContext";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
    console.log("inside use effect after api");
  }, []);
  console.log("after use effec");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json(data);
    // console.log(json);
    setListOfRestaurants(
      json.data.cards.find(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // json.data.cards.find((c)=>c.card.gridElements.infoWithStyle.restaurants).card.card.gridElements.infoWithStyle.restaurants

    setFilteredRestaurent(
      json.data.cards.find(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>OOps!yore offline</h1>;

  const { loggedInUser, setUserInfo, userInfo } = useContext(UsesrContext);

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex pt-16 ml-60">
        <div className="">
          <input
            className=" lg:border-1 w-3xl "
            data-testid="searchInput"
            type="text"
            placeholder="Search restaurents"
            value={searchText}
            onChange={(e) => {
              const text = e.target.value;
              setSearchText(text);
            }}
            onKeyDown={() => {
              const searched = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(searched);
              // console.log(searched);
            }}
          />

          <button
            className="bg-green-200  mx-5 px-3 py-1 hover:cursor-pointer rounded-lg hover:bg-green-300"
            onClick={() => {
              const searched = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(searched);
              // console.log(searched);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-gray-300 px-4 rounded-lg hover:cursor-pointer hover:bg-gray-400"
          onClick={() => {
            const filterdList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurent(filterdList);
            // console.log(filterdList);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div>
        <input
          className="border-2 ml-60 mt-10"
          value={userInfo}
          onChange={(e) => {
            setUserInfo(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap  mx-20 mt-10 ora">
        {/* <RestaurantCard resData={resObj[0]} />
        <RestaurantCard resData={resObj[1]} />
        <RestaurantCard resData={resObj[2]} />
        <RestaurantCard resData={resObj[3]} />
         */}
        {filteredRestaurent.map((element) => (
          <Link key={element.info.id} to={"restaurants/" + element.info.id}>
            {element.info.promoted ? (
              <RestaurantCardPromoted resData={element} />
            ) : (
              <RestaurantCard
                // ✅ Unique key here
                resData={element}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
