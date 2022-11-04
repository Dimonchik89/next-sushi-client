import phone from "../../static/icon/phone.png";
import location from "../../static/icon/location.png";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

import header from "../../styles/header.module.scss";

const HeaderMenuContact = () => {

    return (
        <Box className={header.header_menu__contact}>
            <Box>
                <Box 
                    className="d-flex justify-end align-center"
                    sx={{marginBottom: { xl: "2.1rem", lg: ".7rem"}}}
                >
                    <Typography
                        className={header.header_contact__text}
                    >
                        +1 703-697-1776
                    </Typography>
                    <Box
                        className="ml-12"
                    >
                        <picture>
                            <img
                                className={header.header_contact__icon}
                                src={"../../static/icon/phone.png"} 
                                alt="phone"
                            />
                        </picture>
                    </Box>
                </Box>

                <Box className="d-flex justify-end align-center">
                    <Typography
                        className={header.header_contact__text}
                    >
                        Miami, FLO 
                    </Typography>
                    <Box
                        className="ml-12"
                    >
                        <picture>
                            <img
                                className={header.header_contact__icon}
                                src={"../../static/icon/location.png"} 
                                alt="location"
                            />
                        </picture>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default HeaderMenuContact;