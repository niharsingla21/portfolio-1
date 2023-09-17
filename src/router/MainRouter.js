import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/aboutMe",
        element: <AboutMe/>
    },
    {
        path: "/contactMe",
        element: <ContactMe/>
    },
    {
        path: "/experience",
        element: <Experience/>
    },
    {
        path: "/skills",
        element: <Skills/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
])