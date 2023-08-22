import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer";
import {Typography} from "@mui/material";

export default function AboutMe() {
    return (
        <div className="App">
            <AppHeader/>
            <Typography variant="h1">About Me</Typography>
            <Footer/>
        </div>
    )
}