import { Grid, Box, Typography, Button } from "@mui/material";
import { addProduct } from "../../../store/cart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import adminStyle from "../../../styles/card/adminCard.module.scss";

const AdminCard = ({label = null, item, addProduct, handleChangeTheme, themeName, theme, activeTheme}) => {
    let image;
    if(item?.img) {
        image = JSON.parse(item.img)[0]
    }

    const active = activeTheme === themeName ? "active" : null;

    return (
        <Grid 
            item 
            xl={3} lg={6} md={12} 
            className={`card__inner ${adminStyle.admin_card__inner} ${active}`}
            onClick={() => handleChangeTheme(themeName)}
        >
            <Box
                className={`card ${adminStyle.admin_card} ${active}`}
            >
                <Box
                    className="card-img__wrapper"
                >
                    <picture>
                        <img 
                            className="card__img"
                            src="../../../static/img/nigiri.png"
                            alt="photo"
                        />
                    </picture>
                    {label}
                </Box>

                <Box
                    className="card-info"
                >
                    <Typography
                        className={theme.card__title}
                        align="center"
                    >
                        {item?.name}
                    </Typography>
                </Box>

                <Box
                    className="card-description"
                >
                    <Typography
                        className={theme.card__text}
                        align="center"
                    >
                        {item?.components}
                    </Typography>
                </Box>

                <Typography
                    className={theme.card__text}
                >
                    {`${item?.weight}g`}
                </Typography>

                <Box className="d-flex space-between card-button__wrapper">
                    <Button
                        className={`button__sm ${theme.button_border__color}`}
                    >
                        {`$ ${item?.cost}`}
                    </Button>
                    <Button
                        className={`button__sm ${theme.button__color}`}
                        onClick={() => addProduct({...item, qty: 1})}
                    >
                        +add
                    </Button>
                </Box>
            </Box>
        </Grid>
    )
}

const mapDispatchToProps = dispatch => ({
    addProduct: bindActionCreators(addProduct, dispatch)
})

const connector = connect(null, mapDispatchToProps);

export default connector(AdminCard);