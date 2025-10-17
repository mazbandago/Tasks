import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import DashboardLayout from "./pages/DashboardLayout";
import FootballPage from "./pages/FootballPage";
import PoliticsPage from "./pages/PoliticsPage";
import SignInForm from "./pages/SignInForm";
import protectedRoute from "./pages/protectedRoute";
import LandingPage from "./pages/LandingPage";


const router = createBrowserRouter([
    {
        path:"/",
        Component:LandingPage
    },
    {
        path:"/generalnews",
        Component: HomePage,
    },
    {
        path:"/signinform",
        Component:SignInForm
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
                Component:protectedRoute,
                children:[
                    {
                        path:"politics",
                        Component:PoliticsPage
                    }
                ]
            }
        ]
    }
]); 
export default router;