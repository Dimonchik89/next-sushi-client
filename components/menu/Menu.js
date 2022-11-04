import { useEffect } from "react";
import { Box, Container } from "@mui/material";
import MenuHeader from "./MenuHeader";
import MenuButtonBlock from "./MenuButtonBlock";
import MenuContent from "./MenuContent";
import Spinner from "../spinner/Spinner";
import { changeActiveMenu } from "../../store/activeMenu";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useRouter } from "next/router";

const Menu = ({changeActiveMenu, categories, product, theme}) => {
    const router = useRouter();
    const categoryid = +router.query?.categoryid;

    useEffect(() => {
        changeActiveMenu(categoryid || 2)
    }, [changeActiveMenu, categoryid])

    if(!product) {
        return <Spinner/>
    }

    return (
        <Box className="menu">
            <Container maxWidth="xl" className="d-flex d-column">
                <MenuHeader/>
                <MenuButtonBlock categories={categories}/>
                <MenuContent data={product} theme={theme}/>
            </Container>
        </Box>
    )
}

const mapDispatchToProps = dispatch => ({
    changeActiveMenu: bindActionCreators(changeActiveMenu, dispatch)
})

const connector = connect(null, mapDispatchToProps)

export  default connector(Menu);