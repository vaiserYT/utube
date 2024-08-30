import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { useParams } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import "./index.css";
import App from "./App.jsx";
import "./css/main.css";
import Watch from "./Watch.jsx";
import AddVideo from "./components/addVideo.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {    
    path: "/watch/video/:id",
    element: <Watch />,
  },
  {    
    path: "/create_video",
    element: <AddVideo />,
  }

]);



ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);