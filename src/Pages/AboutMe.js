import '../css/app.css';
import '../css/body.css';
import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer";
import {Typography} from "@mui/material";
import BasePage from "../components/BasePage";

export default function AboutMe() {
    return (
        <BasePage pageContent={"About Me"}></BasePage>
        // <div className="App">
        //     <AppHeader/>
        //     <body className="body">
        //         <Typography variant="h3">About Me</Typography>
        //     </body>
        //     <Footer/>
        // </div>
    )
}