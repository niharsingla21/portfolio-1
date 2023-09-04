import BasePage from "../components/BasePage";
import {Box, Container, Grid} from "@mui/material";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import TimelineContext from "@mui/lab/Timeline/TimelineContext";

export default function Experience() {

    const test = () => {
        return (
            <Container maxWidth={"lg"} style={{
                height: "100%"
            }}>
                <Grid container height="100%" maxWidth="100%" maxHeight="100%">
                    <Grid container item xs="3" md="4" lg="4" height="100%" width="100%" padding="20px 20px 20px 20px">
                        <Box style={{
                            height: "100%",
                            width: "100%",
                            border: "1px solid white",
                            borderRadius: "10px"
                        }}>
                            <Box style={{
                                height: "-webkit-fill-available",
                                margin: "10px",
                                padding: "15px"
                            }}>
                                <Timeline position="alternate">
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            2022
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            2017
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            2015
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            2015
                                        </TimelineContent>
                                    </TimelineItem>

                                </Timeline>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid container item xs="9" md="8" lg="8" height="100%" width="100%" padding="20px 20px 20px 20px">
                        <Box style={{
                            height: "100%",
                            width: "100%",
                            border: "1px solid white",
                            borderRadius: "10px"
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