import { Box, Typography } from "@mui/material";
import logo from "../../static/img/logo.png";

import header from "../../styles/header.module.scss";

const HeaderMenuLogo = () => {

    return (
        <Box className={header.header_menu__logo}>
            <Box className={"d-flex align-center"}>
                <picture>
                    <img
                        className={header.header__logo}
                        src={"../../static/img/logo.png"} 
                        alt="logo"
                    />
                </picture>
                <Box>
                    <Typography
                        className={header.header_menu__logo_title}
                    >
                        Sushi-sempai
                    </Typography>
                    <Typography
                        className={header.header_menu__logo_subtitle}
                    >
                        asian food delivery
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default HeaderMenuLogo;