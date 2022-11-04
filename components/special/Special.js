import { useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Card from "../card/Card";
import New from "../new/New";
import Spinner from "../spinner/Spinner";
import useCreateTheme from "../../hook/useCreateTheme";

const Special = ({data, theme}) => {
    const { activeTheme, setTheme } = useCreateTheme();

    useEffect(() => {
        setTheme(theme)
    }, [setTheme, theme])

    if(!data) {
        return <Spinner/>
    }

    const content = data?.map((item, i) => <Card key={i} label={<New/>} item={item} theme={activeTheme}/>)
    
    return (
        <Box className="special">
            <Container maxWidth="xl">
                <Box>
                    <Typography
                        className="title"
                    >
                        Special offers
                    </Typography>
                </Box>

                <Box className="special-card__wrapper">
                    <Grid 
                        container 
                        // spacing={{xl: 11, lg: 20}}
                        rowSpacing={{lg: 10, md: 5, sm: 5}}
                    >
                            {content}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Special;