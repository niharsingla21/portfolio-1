import BasePage from "../components/BasePage";
import {Box, Container, Grid, Typography} from "@mui/material";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {useState} from "react";
import ecl from "../resources/2015-E.json";
import hcl from "../resources/2015-H.json";
import metQa from "../resources/2017.json";
import metDev from "../resources/2019.json";
import measured from "../resources/2022.json";
import {switches} from "../models/Constants";
import '../css/experience.css';


export default function Experience() {
    const [description, setDescription] = useState(measured.description);

    const handleExperienceChange = (cmp) => {
        switch (cmp) {
            case 'measured': {
                return setDescription([...measured.description]);
            }
            case 'metDev': {
                return setDescription([...metDev.description]);
            }
            case 'metQa': {
                return setDescription([...metQa.description]);
            }
            case 'hcl': {
                return setDescription([...hcl.description]);
            }
            case 'ecl': {
                return setDescription([...ecl.description]);
            }
            default: {
                return setDescription([...measured.description]);
            }
        }
    }

    const getPageContent = () => {
        return (
            <Container maxWidth={"lg"} className="height-100">
                <Grid container height="100%" maxWidth="100%" maxHeight="100%">
                    <Grid container item xs="3" md="4" lg="4" height="100%" width="100%" padding="20px 20px 20px 20px">
                        <Box className="width-100 height-100 main-box-border">
                            <Box className="margin-10px padding-15px height-94">
                                <Box className="height-4 display-flex flex-direction-column justify-content-flex-end">
                                    <Typography variant="h6" fontFamily="monospace"
                                                onClick={() => handleExperienceChange("measured")}>
                                        Present
                                    </Typography>
                                </Box>
                                <Timeline position="alternate" className="margin-0 height-inherit">
                                    {switches.map(switchObj => {
                                        return (
                                            <TimelineItem className="height-25">
                                                <TimelineSeparator>
                                                    <TimelineConnector/>
                                                    <TimelineDot onClick={() => handleExperienceChange(switchObj.cmp)}/>
                                                </TimelineSeparator>
                                                <TimelineContent
                                                    className="display-flex align-items-flex-end justify-content-center"
                                                    onClick={() => handleExperienceChange(switchObj.cmp)}>
                                                    <Typography className="font-xl font-family-monospace">
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
                        <Box className="width-100 height-100 main-box-border">
                            <Box className="margin-10px padding-15px height-94">
                                {description.map(point => {
                                    return (
                                        <ul className="list-style-type-circle">
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
        <BasePage bgColor="#313236" pageContent={getPageContent()}/>
    )
}