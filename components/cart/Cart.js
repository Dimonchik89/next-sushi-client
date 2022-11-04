import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { product, openCart } from "../../store/cart";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import useSumma from "../../hook/useSumma";

const Cart = ({product, openCart}) => {
    const {countSumma, summa} = useSumma();

    useEffect(() => {
        countSumma(product)
    }, [countSumma, product])

    return (
        <Box className="cart-wrapper">
            <Box 
                className="cart d-flex justify-center align-center"
                onClick={() => openCart()}    
            >
                <Box className="cart-icon__wrapper">
                    <picture>
                        <img 
                            className="cart__icon"
                            src={"../../static/icon/cart.png"} 
                            alt="cart"
                        />
                    </picture>
                </Box>

                <Box className="cart-content__wrapper">
                    <Typography
                        className="cart__text"
                    >
                        {product?.length}
                    </Typography>
                    <Typography
                        className="cart__text"
                    >
                        {`${summa}$`}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    product
})

const mapDispatchToProps = dispatch => ({
    openCart: bindActionCreators(openCart, dispatch)
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Cart);