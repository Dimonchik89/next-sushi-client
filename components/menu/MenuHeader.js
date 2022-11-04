import { Box, Typography } from "@mui/material";
import homeLeft from "../../static/icon/home_left.png";
import homeRight from "../../static/icon/home_right.png";
import sushiIcon from "../../static/icon/sushi_icon.png";

const MenuHeader = () => {

    return (
        <Box className="menu-header">
            <Typography className="title">
                OUR MENU
            </Typography>
            <Box
                className="menu-home__left-wrapper"
            >
                    <picture>
                        <img 
                            className="menu-home__left"
                            src={"../../static/icon/home_left.png"} 
                            alt="home_left"
                        />
                    </picture>
                
            </Box>
            <Box
                className="menu-home__right-wrapper"
            >
                <picture>
                    <img 
                        className="menu-home__right"
                        src={"../../static/icon/home_right.png"} 
                        alt="home_right"
                    />
                </picture>
            </Box>
            <Box
                className="menu-sushi__icon-wrapper"
            >
                <picture>
                    <img 
                        className="menu-sushi__icon"
                        src={"../../static/icon/sushi_icon.png"} 
                        alt="sushi_icon"
                    />
                </picture>
            </Box>
        </Box>
    )
}
export default MenuHeader;