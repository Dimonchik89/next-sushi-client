import { useEffect, useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { showModal, closeCart, product, clearProduct } from "../../store/cart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import {cart} from "../../static/img/cart.js";
import CartModalItem from "./CartModalItem";
import useSumma from "../../hook/useSumma";
import { usePostCartMutation } from "../../store/api/sushiApi";
import CartModalBuy from "./CartModalBuy";

const CartModal = ({ product, showModal, closeCart, clearProduct, handleOpen }) => {
    const [email, setEmail] = useState("")
    const {countSumma, summa} = useSumma();
    const [postCart, { isLoading }] = usePostCartMutation();

    useEffect(() => {
        countSumma(product)
    }, [countSumma, product])

    const content = product.length ? product?.map((item, i) => <CartModalItem key={i} product={item}/>) : cart;

    const handleSend = async () => {
        const products = product.map(item => ({id: item.id, name: item.name, qty: item.qty}))
        const obj = {
            date: new Date(),
            email: email,
            product: JSON.stringify(products)
        }
        await postCart(obj)

        if(!isLoading) {
            closeCart()
            clearProduct()
            setEmail("")
            handleOpen()
        }
    }

    const handleChangeMail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div>
            <Modal
                open={showModal}
                onClose={() => closeCart()}
                disableRestoreFocus={false}
                disableAutoFocus={false}
            >
                <Box className="cart-modal">
                    {content}
                    <Box>
                        <Typography
                            className="cart-modat__text"
                            align="right"
                        >
                            {product.length ? `${summa}$` : null}
                        </Typography>
                    </Box>
                    <CartModalBuy product={product} handleSend={handleSend} email={email} handleChangeMail={handleChangeMail}/>
                </Box>
            </Modal>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    showModal,
    product
})

const mapDispatchToProps = dispatch => ({
    closeCart: bindActionCreators(closeCart, dispatch),
    clearProduct: bindActionCreators(clearProduct, dispatch)
})

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(CartModal);