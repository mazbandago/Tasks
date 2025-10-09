import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import DashboardLayout from "./pages/DashboardLayout";
import FootballPage from "./pages/FootballPage";
import PoliticsPage from "./pages/PoliticsPage";


const router = createBrowserRouter([
    {
        path:"/",
        Component: HomePage,
    },
    {
        path:"/Details/:id",
        Component:DetailsPage
    },
    {
        path:"/dashboard",
        Component:DashboardLayout,
        children:[
            {
                index: true,
                Component:FootballPage,
            },
            {
                path:"Politics",
                Component:PoliticsPage,
            }
        ]
    }
]); 
export default router;