import BasePage from "../components/BasePage";
import {Container} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function Experience() {

    const test = () => {
        return (
            <Container maxWidth={"lg"}>
                <Grid2 container rowSpacing="3" columnSpacing="2">
                    <Grid2 container xs="8" md="8">Timeline</Grid2>
                    <Grid2 container xs="8" md="8">
                        <Grid2 item>Exp 1</Grid2>
                        <Grid2 item>Exp 2</Grid2>
                        <Grid2 item>Exp 3</Grid2>
                        <Grid2 item>Exp 4</Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        )
    }
    return (
        <BasePage pageContent={test()}/>
    )
}