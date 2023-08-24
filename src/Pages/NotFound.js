import '../css/App.css';
import AppHeader from "../components/AppHeader";
import {Typography} from "@mui/material";
import Footer from "../components/Footer";

export default function NotFound() {
    return (
        <div className="App">
            <AppHeader/>
            <Typography variant="h1">NOT FOUND</Typography>
            <Footer/>
        </div>
    )
}