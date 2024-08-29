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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {    
    path: "/watch/video/:id",
    element: <Watch />,
  }
]);



ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);