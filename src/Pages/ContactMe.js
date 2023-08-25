import '../css/app.css';
import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer";
import {Typography} from "@mui/material";

export default function ContactMe() {
    return (
        <div className="App">
            <AppHeader/>
            <Typography variant="h1">Contact Me</Typography>
            <Footer/>
        </div>
    )
}