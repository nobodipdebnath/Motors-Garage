import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import BlogPage from "../Pages/BlogPage";
import ContactPage from "../Pages/ContactPage";
import FinancingPage from "../Pages/FinancingPage";
import MobileMechanicPage from "../Pages/MobileMechanicPage";
import BodyPaint from "../Pages/BodyPaint";
import ShopRe from "../Pages/ShopRe";
import DirectionsPage from "../Pages/DirectionsPage";
import SpecialPage from "../Pages/SpecialPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path:'about',
                Component: AboutPage
            },
            {
                path: 'blog',
                Component: BlogPage
            },
            {
                path: 'contact',
                Component: ContactPage
            },
            {
                path: 'financing',
                Component: FinancingPage
            },
            {
                path: 'mobileMechanic',
                Component: MobileMechanicPage
            },
            {
                path: 'bodyPaint',
                Component: BodyPaint
            },
            {
                path: 'shop',
                Component: ShopRe
            },
            {
                path: 'directions',
                Component: DirectionsPage
            },
            {
                path: 'special',
                Component: SpecialPage
            }
        ]
    }
])
export default router;