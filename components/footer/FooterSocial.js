import { Box, Button } from "@mui/material";
import usePagination from "@mui/material/usePagination/usePagination";
import Link from "next/link";

const FooterSocial = () => {
    const provider = usePagination();

    return (
        <Box className="footer-social d-flex align-center">
            <Box
                className="footer-icon__wrapper"
            >
                <Link href="https://www.instagram.com/" target="_blank">
                    <a>
                        <picture>
                            <img className="footer__icon" src={"../../static/icon/instagram.png"} alt="instagram"/>
                        </picture>
                    </a>
                </Link>
            </Box>
            <Box
                className="footer-icon__wrapper"
            >
                <Link href="https://m.facebook.com/login/?locale2=ru_RU" target="_blank">
                    <a>
                        <picture>
                            <img className="footer__icon" src={"../../static/icon/facebook.png"} alt="facebook"/>
                        </picture>
                    </a>
                </Link>
            </Box>
            <Box
                className="footer-icon__wrapper"
            >
                <Link href="https://web.telegram.org/z/" target="_blank">
                    <a>
                        <picture>
                            <img className="footer__icon" src={"../../static/icon/telegram.png"} alt="telegram"/>
                        </picture>
                    </a>
                </Link>
            </Box>
        </Box>
        
    )
}
export default FooterSocial;