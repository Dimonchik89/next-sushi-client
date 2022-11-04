import { Box, Container, Grid } from "@mui/material";
import AboutInfo from "./AboutInfo";

const About = () => {

    return (
        <Box className="about">
            <Container sx={{maxWidth: { xl: "xl", lg: "lg" }}} >
                <Grid 
                    container 
                    columnSpacing={{xl: 11, lg: 0}} 
                    rowSpacing={{xl: 0, lg: 2}} 
                    className="container-wrapper"
                >
                    <Grid item xl={6} lg={12} className="about-container__img">
                        <Box className="about-img__wrapper">
                            <picture>
                                <img 
                                    className="about__img"
                                    src={'../../static/img/about.jpg'} 
                                    alt="about"
                                />
                            </picture>
                        </Box>
                    </Grid>
                    <Grid item xl={6} lg={12} className="about-container__text">
                        <AboutInfo/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default About;