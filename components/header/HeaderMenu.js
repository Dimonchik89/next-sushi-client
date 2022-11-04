import { Box, Container } from "@mui/material";
import HeaderMenuLogo from "./HeaderMenuLogo";
import HeaderMenuLinks from "./HeaderMenuLinks";
import HeaderMenuContact from "./HeaderMenuContact";

import header from "../../styles/header.module.scss";
// import "../../style/header.scss";

const HeaderMenu = () => {

    return (
        <Box className={header.header_menu}>
            <Container maxWidth="xl">
                <Box className="d-flex space-between align-center">
                    <HeaderMenuLogo/>
                    <HeaderMenuLinks/>
                    <HeaderMenuContact/>    
                </Box>
            </Container>
        </Box>
    )
}
export default HeaderMenu;