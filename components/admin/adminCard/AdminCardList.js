import React,{ useState, useEffect } from "react";
import { Datagrid, EditButton, List, NumberField, TextField } from "react-admin";
import AdminCard from "./AdminCard";
import { Box, Grid, Button } from "@mui/material";
import axios from "axios";
import useHandleChangeWindow from "../../../hook/useHandleChangeWindow";
import SnackBar from "../../snackBar/SnackBar";

import red from "../../../styles/card/redCard.module.scss";
import blue from "../../../styles/card/blueCard.module.scss";
import green from "../../../styles/card/greenCard.module.scss";
import blueText from "../../../styles/card/blueTextCard.module.scss";
import greenText from "../../../styles/card/greenTextCard.module.scss";

const placeholderCard = {
    id: 1,
    name: "sashimi plateau",
    cost: 80,
    weight: 1800,
    components: "trout, scallops, avocado, tuna, sea bass, lemon mint sauce with basil",
    img: '["images/1665735402006"]',
    categoryId: 1,
}

const AdminCardList = ({theme}) => {
    const cardQty = [
    {
        name: "red",
        theme: red
    },
    {
        name: "blue",
        theme: blue
    },
    {
        name: "green",
        theme: green
    },
    {
        name: "blueText",
        theme: blueText
    },
    {
        name: "greenText",
        theme: greenText
    },
];

    const [activeTheme, setActiveTheme] = useState(theme)
    const { open, handleClose, handleOpen } = useHandleChangeWindow();

    const handleChangeTheme = (themeName) => {
        setActiveTheme(themeName)
    }

    const submitTheme = (activeTheme) => {
        axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}theme`, {
            theme: activeTheme
        })
        handleOpen()
    }

    const content = cardQty.map((item, i) => {
        return (
            <AdminCard 
                key={i} 
                item={placeholderCard} 
                handleChangeTheme={handleChangeTheme} 
                themeName={item.name} 
                theme={item.theme}
                activeTheme={activeTheme}
            />
        )
    })
    
    return (
        <Box>
            <Grid container maxWidth="xl" columnSpacing={{xl: 1, lg: 1, md: 1, sm: 0}}>
                {content}
            </Grid>
            <Box
                style={{marginTop: "20px", textAlign: "center", marginBottom: "20px"}}
            >
                <Button
                    variant="contained"
                    onClick={() => {
                        submitTheme(activeTheme)
                    }}
                >
                    Apply
                </Button>
            </Box>
            <SnackBar open={open} handleClose={handleClose} activeTheme={activeTheme} hideDuration={4000}/>
        </Box>
    )
}
export default AdminCardList