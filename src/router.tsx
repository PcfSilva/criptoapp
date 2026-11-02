import { createBrowserRouter } from "react-router";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    children: [
      { path: "/", element: <Home /> },
      { path: "detail", element: <Detail /> },
      { path: "notFound", element: <NotFound /> }
    ]
  }
])