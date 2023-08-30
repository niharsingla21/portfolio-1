import AppHeader from "./AppHeader";
import '../css/app.css';
import Footer from "./Footer";
import AppBody from "./AppBody";

export default function BasePage(props) {
    return (
        <div className="App">
            <AppHeader/>
            <AppBody bgColor={props.bgColor} pageContent={props.pageContent}/>
            <Footer/>
        </div>
    )
}