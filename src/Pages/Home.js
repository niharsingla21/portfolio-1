import '../css/App.css';
import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer";
import {Typography} from "@mui/material";

export default function Home() {
    return (
        <div className="App">
            <AppHeader/>
            <Typography variant="h1">HOME</Typography>
            <Footer/>
        </div>
    );
}

