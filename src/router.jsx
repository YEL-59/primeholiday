import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Destination from "./Pages/Destination/Destination";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import LayOut from "./LayOut/LayOut";
import Oman from "./Pages/Oman/Oman";
import TearmsandCondition from "./Pages/TearmsandCondition/TearmsandCondition";
import Privacy from "./Pages/Privacy/Privacy"
import Cancellation from "./Pages/Cancelation/Cancellation";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true, // Renders AboutUs at the root "/"
        element: <AboutUs />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "destination",
        element: <Destination />,
      },
      {
        path: "destination/:destinationName",
        element: <Oman />,
      },
    
    
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "terms-and-conditions",
        element: <TearmsandCondition/>,
      },
      {
        path: "privacy",
        element: <Privacy/>,
      },
      {
        path: "cancellation",
        element: <Cancellation/>,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home" replace />,
  },
]);

export default router;
