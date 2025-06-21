import React, { useEffect, useState } from "react"; // DEFAULT EXPORT
import ReactDOM from "react-dom/client"; // DEFAULT EXPORT
import Header from "./components/Header"; // IMPORTING STYLE OF NAMED EXPORT
import Body from "./components/Body"; // DEFAULT EXPORT
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { lazy, Suspense } from "react";
import UsesrContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const data = {
      name: "ameen",
    };
    setUserInfo(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UsesrContext.Provider
        value={{ loggedInUser: userInfo, setUserInfo, userInfo }}
      >
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UsesrContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
