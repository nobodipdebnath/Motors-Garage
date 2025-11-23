import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import BlogPage from "../Pages/BlogPage";
import ContactPage from "../Pages/ContactPage";

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
            }
        ]
    }
])
export default router;