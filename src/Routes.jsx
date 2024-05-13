import { createBrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import Home from "./Componet/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoutes></MainRoutes>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        }
      ]
      
    },
  ]);

  export default router