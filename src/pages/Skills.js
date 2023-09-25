import BasePage from "../components/BasePage";
import {Container, Grid} from "@mui/material";
import {Masonry} from "@mui/lab";

export default function Skills() {

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
                        {skills.map((height, index) => (
                            <Item key={index} sx={{ height }}>
                                {index + 1}
                            </Item>
                        ))}
                    </Masonry>
                </Grid>
            </Container>
        )
    }
    return (
        <BasePage pageContent={getPageContent()}/>
    )
}