import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";


const router = createBrowserRouter([
    {
        path:"/",
        Component: HomePage,
    },
    {
        path:"/Details/:id",
        Component:DetailsPage
    }
]); 
export default router;