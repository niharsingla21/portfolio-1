import BasePage from "../components/BasePage";
import {Box, Container, Grid} from "@mui/material";

export default function Experience() {

    const test = () => {
        return (
            <Container maxWidth={"lg"} style={{
                height:"100%"
            }}>
                <Grid container height="100%" maxWidth="100%" maxHeight="100%">
                    <Grid container item xs="3" md="4" lg="4" height="100%" width="100%" padding="20px 20px 20px 20px">
                        <Box style={{
                            height:"100%",
                            width:"100%",
                            border:"1px solid white",
                            borderRadius:"10px"
                        }}>
                            TIMELINE
                        </Box>
                    </Grid  >
                    <Grid container item xs="9" md="8" lg="8" height="100%" width="100%" padding="20px 20px 20px 20px">
                        <Box style={{
                            height:"100%",
                            width:"100%",
                            border:"1px solid white",
                            borderRadius:"10px"
                        }}>
                            <Grid item>Exp 1</Grid>
                            <Grid item>Exp 2</Grid>
                            <Grid item>Exp 3</Grid>
                            <Grid item>Exp 4</Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        )
    }
    return (
        <BasePage bgColor="#313236" pageContent={test()}/>
    )
}