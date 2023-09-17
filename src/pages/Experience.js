import BasePage from "../components/BasePage";
import {Box, Container, Grid, Typography} from "@mui/material";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {useEffect, useState} from "react";
import ecl from "../resources/2015-E.json";
import hcl from "../resources/2015-H.json";
import metQa from "../resources/2017.json";
import metDev from "../resources/2019.json";
import measured from "../resources/2022.json";


const switches = [
    {year: 2022, cmp: 'measured'},
    {year: 2019, cmp: 'metDev'},
    {year: 2017, cmp: 'metQa'},
    {year: 2015, cmp: 'hcl'},
    {year: 2015, cmp: 'ecl'}
]

export default function Experience() {
    const [description, setDescription] = useState(measured.description);
    const [currentCmp, setCurrentCmp] = useState("measured")

    const handleExperienceChange = (cmp) => {
        switch (cmp) {
            case 'measured': {
                console.log(`description updated to : ${cmp}`);
                return setDescription([...measured.description]);
            }
            case 'metDev': {
                console.log(`description updated to : ${cmp}`);
                return setDescription([...metDev.description]);
            }
            case 'metQa': {
                console.log(`description updated to : ${cmp}`);
                return setDescription([...metQa.description]);
            }
            case 'hcl': {
                console.log(`description updated to : ${cmp}`);
                console.log(`${hcl.description}`);
                return setDescription([...hcl.description]);
            }
            case 'ecl': {
                console.log(`description updated to : ${cmp}`);
                return setDescription([...ecl.description]);
            }
            default: {
                console.log(`description updated to : ${cmp}`);
                return setDescription([...measured.description]);
            }
        }
    }

    // useEffect(() => {
    //     test();
    // }, [description])

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
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end"
                                }}>
                                    <Typography variant="h6" fontFamily="monospace">
                                        Present
                                    </Typography>
                                </Box>
                                <Timeline position="alternate" style={{
                                    height: "inherit",
                                    margin: "0"
                                }}>
                                    {switches.map(switchObj => {
                                        return (
                                            <TimelineItem style={{
                                                height: "25%"
                                            }}>
                                                <TimelineSeparator>
                                                    <TimelineConnector/>
                                                    <TimelineDot onClick={() => handleExperienceChange(switchObj.cmp)}/>
                                                </TimelineSeparator>
                                                <TimelineContent style={{
                                                    display: "flex",
                                                    alignItems: "flex-end",
                                                    justifyContent: "center"
                                                }} onClick={() => handleExperienceChange(switchObj.cmp)}>

                                                    <Typography style={{
                                                        fontSize: "x-large",
                                                        fontFamily: "monospace"
                                                    }}>
                                                        {switchObj.year}
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
                            <Box style={{
                                height: "94%",
                                margin: "10px",
                                padding: "15px"
                            }}>
                                {description.map(point => {
                                    return (
                                        <ul style={{
                                            listStyleType: "circle"
                                        }}>
                                            <li>
                                                <Typography variant="body1" inlist="true" textAlign="left">
                                                {point}
                                                </Typography>
                                            </li>
                                        </ul>)
                                })}
                            </Box>
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