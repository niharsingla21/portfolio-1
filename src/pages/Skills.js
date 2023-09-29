import BasePage from "../components/BasePage";
import {Chip, Container, Grid, styled, Typography} from "@mui/material";
import {Masonry} from "@mui/lab";
import skills from "../resources/skills.json";;

export default function Skills() {

    function getSkills() {
        return (
            Object.keys(skills.data).map(skillHeader => (
                skills.data[skillHeader].map(skill => {
                    return (
                        <Chip label={skill} variant="outlined"/>
                    )
                })

            ))
        )
    }

    const getPageContent = () => {
        return (
            <Container maxWidth={"lg"} className="height-100">
                <Grid container height="100%" maxWidth="100%" maxHeight="100%" padding="60px 20px">
                    <Masonry
                        columns={4}
                        spacing={2}
                        defaultHeight={450}
                        defaultColumns={4}
                        defaultSpacing={1}
                    >
                        {getSkills()}
                    </Masonry>
                </Grid>
            </Container>
        )
    }
    return (
        <BasePage bgColor="#313236" pageContent={getPageContent()}/>
    )
}