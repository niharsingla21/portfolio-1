import BasePage from "../components/BasePage";
import {Box, Container, Grid, Typography} from "@mui/material";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";

const switchYears = [
    2022,
    2019,
    2017,
    2015,
    2015
]

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
                                height: "94%",
                                margin: "10px",
                                padding: "15px"
                            }}>
                                <Box style={{
                                    height: "4%",
                                    display:"flex",
                                    flexDirection:"column",
                                    justifyContent:"flex-end"
                                }}>
                                    <Typography variant="h6" fontFamily="monospace">
                                        Present
                                    </Typography>
                                </Box>
                                <Timeline position="alternate" style={{
                                    height: "inherit",
                                    margin: "0"
                                }}>
                                    {switchYears.map(switchYear => {
                                        return (
                                            <TimelineItem style={{
                                                height: "25%"
                                            }}>
                                                <TimelineSeparator>
                                                    <TimelineConnector/>
                                                    <TimelineDot/>
                                                </TimelineSeparator>
                                                <TimelineContent style={{
                                                    display:"flex",
                                                    alignItems:"flex-end",
                                                    justifyContent:"center"
                                                }}>
                                                    <Typography style={{
                                                        fontSize:"x-large",
                                                        fontFamily:"monospace"
                                                    }}>
                                                        {switchYear}
                                                    </Typography>
                                                </TimelineContent>
                                            </TimelineItem>
                                        )
                                    })}
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