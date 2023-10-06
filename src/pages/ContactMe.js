import BasePage from "../components/BasePage";
import {Container} from "@mui/material";

export default function ContactMe() {

    const getPageContent = () => {
        return (
            <Container maxWidth={"md"} className="height-100">
            </Container>
        )
    }
    return (
        <BasePage bgColor="#313236" pageContent={getPageContent()}/>
    )
}