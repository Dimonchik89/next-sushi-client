import { Box, Container, Grid, Typography } from "@mui/material";
import Carousel from "../carousel/Carousel";
import ReviewCard from "./ReviewCard";
import photo from "../../static/img/review-photo.png"

const Review = () => {
    let carouselArr = []
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    for(let i = 0; i < 5; i++) {
        carouselArr.push(<ReviewCard key={i} photo={"../../static/img/review-photo.png"} text={text} rating={i+1}/>)
    }

    return (
        <Box className="review">
            <Container maxWidth="xl">
                <Grid 
                    container 
                    spacing={{xl: 4, lg: 0}} 
                    sx={{display: { xs: "none" }}}
                    className="container-wrapper"
                >
                    <Grid 
                        item 
                        xl={6}
                        lg={12}
                        md={12}
                        sm={12}
                        className="d-flex align-center MuiGrid-grid-sm-12"    
                    >
                        <Box>
                            <Typography
                                className="review__title"
                            >
                                What our customers say
                            </Typography>
                            <Typography
                                className="review__text"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid 
                        item 
                        xl={6}
                        lg={12}
                        md={12}
                        sm={12} 
                        className="MuiGrid-grid-sm-12">
                        <Carousel slides={carouselArr}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default Review;