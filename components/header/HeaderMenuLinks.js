import { Box, Button } from "@mui/material";
import { headerMenuLinks } from "../../links/links";
import Link from "next/link";

import header from "../../styles/header.module.scss";

const HeaderMenuLinks = () => {

    const content = headerMenuLinks.map((item, i) => <Link 
                                                        key={i}
                                                        href={`${item.link}`}
                                                      >
                                                        <a
                                                            className="button__lg button__orange button-header__menu"
                                                        >
                                                            {item.title}
                                                        </a>
                                                     </Link>)

    return (
        <Box className={header.header_menu__links}>
            {content}
        </Box>
    )
}
export default HeaderMenuLinks;