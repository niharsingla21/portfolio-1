import BasePage from "../components/BasePage";
import {Chip, Container, Grid, styled} from "@mui/material";
import {Masonry} from "@mui/lab";
import skills from "../resources/skills.json";
import Paper from "@mui/material/Paper";

export default function Skills() {

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    function getSkills() {
        return (
            JSON.parse(skills.data).forEach(skillheader => {
                return (
                    <Item>{skillheader}</Item>
                )
            })
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
                        {() => getSkills()}
                    </Masonry>
                </Grid>
            </Container>
        )
    }
    return (
        <BasePage bgColor="#313236" pageContent={getPageContent()}/>
    )
}