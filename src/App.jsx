import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Destination from "./Pages/Destination/Destination";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import LayOut from "./LayOut/LayOut";
import Oman from "./Pages/Oman/Oman";

const App = createBrowserRouter([
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
        path: "destination/:id",
        element: <Oman />,
      },
    
    
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home" replace />,
  },
]);

export default App;
