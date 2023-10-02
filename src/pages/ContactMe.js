import BasePage from "../components/BasePage";
import {Container} from "@mui/material";

export default function ContactMe() {

    const getPageContent = () => {

        return (
            <div style={{
                height:"100%",
                width:"100%"
            }}>
                <Container maxWidth={"md"}>
                </Container>
            </div>
        )
    }
    return (
        <BasePage bgColor="#313236" pageContent={getPageContent()}/>
    )
}