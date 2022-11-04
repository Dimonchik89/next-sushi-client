import { useEffect } from 'react';
import { Box, Grid } from "@mui/material";
import Card from "../card/Card";
import Spinner from "../spinner/Spinner";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { activeMenu } from "../../store/activeMenu";
import useCreateTheme from '../../hook/useCreateTheme';

const MenuContent = ({activeMenu, data, theme}) => {
    const { activeTheme, setTheme } = useCreateTheme();

    useEffect(() => {
        setTheme(theme)
    }, [setTheme, theme])
    
    if(!data) {
        return <Spinner/>
    }

    const content = data?.map((item, i) => <Card key={i} item={item} theme={activeTheme}/>)
    
    return (
        <Box className="menu-contant">
            <Grid container rowSpacing={{xl: 11, lg: 8, md: 5, sm: 3}}>
                    {content}
            </Grid>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    activeMenu
})

const connector = connect(mapStateToProps)

export default connector(MenuContent);