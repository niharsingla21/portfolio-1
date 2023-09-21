import BasePage from "../components/BasePage";
import {Container} from "@mui/material";

export default function Skills() {

    const getPageContent = () => {
        return (
            <Container maxWidth={"lg"} className="height-100">

            </Container>
        )
    }
    return (
        <BasePage pageContent={getPageContent()}/>
    )
}