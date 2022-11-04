import { Box, Container, Grid } from "@mui/material";
import HeaderTopItem from "./HeaderTopItem";
import { headerTopLinks } from "../../links/links";

import header from "../../styles/header.module.scss";

const HeaderTop = () => {

    const content = headerTopLinks.map((item, i) => <HeaderTopItem key={i} item={item}/>)

    return (
        <Box className={header.header_top}>
            <Container maxWidth="xl">
                <Grid container>
                    {content}
                </Grid>
            </Container>
        </Box>

    )
}
export default HeaderTop;