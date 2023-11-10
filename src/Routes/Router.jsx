import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Root";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:  [
        {
            path:"home",
        }
      ]
    },
  ]);