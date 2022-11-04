import { changeActiveMenu, activeMenu } from "../../store/activeMenu";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from 'react';

const MenuButton = ({item, changeActiveMenu, activeMenu}) => {
    const router = useRouter()

    useEffect(() => {

    }, [router.query?.categoryid])

    const buttonStyle = activeMenu == item.id ? "button__md button-border__orange active" : "button__md button-border__orange"

    return (
        <Box className="button-menu__wrapper  menu-button__wrapper">
            <Button
                className={buttonStyle}
                onClick={() => {
                    router.push(`?categoryid=${item.id}`, undefined, { scroll: false });
                    changeActiveMenu(item.id)
                }}
            >
                <Typography
                    className="menu-button__title"
                >
                    {item.name}
                </Typography>
            </Button>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    activeMenu
})

const mapDispatchToProps = dispatch => ({
    changeActiveMenu: bindActionCreators(changeActiveMenu, dispatch)
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(MenuButton)