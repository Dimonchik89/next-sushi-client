import { Grid, Box, Typography, Button } from "@mui/material";
import { addProduct } from "../../store/cart/cartSlice";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Card = ({label = null, item, addProduct, theme}) => {
    let image;
    if(item?.img) {
        image = JSON.parse(item.img)[0]
    }

    return (
        <Grid item xl={3} lg={6} md={12} className="card__inner">
            <Box
                className="card"
            >
                <Box
                    className="card-img__wrapper"
                >
                    <picture>
                        <img 
                            className="card__img"
                            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}${image}.png`}
                            alt="photo"
                        />
                    </picture>
                    {label}
                </Box>

                <Box
                    className="card-info"
                >
                    <Typography
                        className={theme?.card__title}
                        align="center"
                    >
                        {item?.name}
                    </Typography>
                </Box>

                <Box
                    className="card-description"
                >
                    <Typography
                        className={theme?.card__text}
                        align="center"
                    >
                        {item?.components}
                    </Typography>
                </Box>

                <Typography
                    className={theme?.card__text}
                >
                    {`${item?.weight}g`}
                </Typography>

                <Box className="d-flex space-between card-button__wrapper">
                    <Button
                        className={`button__sm ${theme?.button_border__color}`}
                    >
                        {`$ ${item?.cost}`}
                    </Button>
                    <Button
                        className={`button__sm ${theme?.button__color}`}
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

export default connector(Card);