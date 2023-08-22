import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home";
import AboutMe from "../Pages/AboutMe";
import ContactMe from "../Pages/ContactMe";
import Experience from "../Pages/Experience";
import Skills from "../Pages/Skills";
import NotFound from "../Pages/NotFound";

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