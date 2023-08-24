import '../css/App.css';
import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer";
import {Typography} from "@mui/material";

export default function Experience() {
    return (
        <div className="App">
            <AppHeader/>
            <Typography variant="h1">Experience</Typography>
            <Footer/>
        </div>
    )
}