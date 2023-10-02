import BasePage from "../components/BasePage";
import {Chip, Container, Grid} from "@mui/material";
import {Masonry} from "@mui/lab";
import skills from "../resources/skills.json";

;

export default function Skills() {

    function getSkills() {
        return (
            Object.keys(skills.data).map((skillHeader, outerIdx) => (
                skills.data[skillHeader].map((skill, innerIdx) => {
                    return (
                        <Chip key={(innerIdx + 1) * (outerIdx + 1)} label={skill} variant="outlined" style={{
                            backgroundColor: 'white',
                            color: "black",
                            fontWeight: "bold",
                            height: "40px",
                            width: "320px"
                        }}/>
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
                        spacing={4}
                        defaultHeight={450}
                        defaultColumns={4}
                        defaultSpacing={1}
                        style={{
                            alignContent: "center",
                            width: "inherit",
                            paddingTop: "30px"
                        }}
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