import { Box, Grid, Typography } from "@mui/material";
import header from "../../styles/header.module.scss";
import Image from "next/image";

const HeaderTopItem = ({item: {icon, iconTitle, title}}) => {

    return (
        <Grid item xl={4} lg={4} md={12} sm={12} className={header.header_top__item}>
            <Box 
                className={header.header_top__inner}
            >
                <picture>
                    <img
                        className={header.header_top__icon}
                        src={icon} 
                        alt={iconTitle}
                    />
                </picture>
                <Box className="ml-12">
                    <Typography
                        className={header.header_top__text}
                    >
                        {title}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    )
}
export default HeaderTopItem;