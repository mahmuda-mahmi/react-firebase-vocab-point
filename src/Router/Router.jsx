import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import Learn from "../Pages/Learn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/learn",
                element: <Learn></Learn>,
            },
            {
                path: "/",
                element: <Home></Home>,
            },
        ]
    },
]);
export default router;