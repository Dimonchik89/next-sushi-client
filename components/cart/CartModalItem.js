import { Box, TextField, Typography, IconButton } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { addQty, removeQty, removeProduct } from "../../store/cart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const CartModalItem = ({product, addQty, removeQty, removeProduct}) => {
    const image = JSON.parse(product?.img)[0]
    return (
        <Box className="d-flex space-between align-center cart-modal__item">
            <Box>
                <picture>
                    <img 
                        className="cart-modal__img"
                        src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}${image}.png`} 
                        alt="image"
                    />
                </picture>
            </Box>
            <Box className="cart-modal__text-wrapper">
                <Typography
                    className="cart-modat__text"
                >
                    {product.name}
                </Typography>
            </Box>
            <Box
                className="d-flex align-center"
            >
                <IconButton
                    className="cart-modal__button"
                    onClick={() => addQty(product.id)}
                >
                    <AddIcon/>
                </IconButton>
                <TextField 
                    className="cart-madal__qty"
                    value={product.qty}
                />
                <IconButton
                    className="cart-modal__button"
                    onClick={() => {
                        if(product.qty > 1) {
                            removeQty(product.id)
                        } else {
                            removeProduct(product.id)
                        }
                    }}
                >
                    <RemoveIcon/>
                </IconButton>
            </Box>
            <Box className="cart-modal__cost-wrapper">
                <Typography
                    className="cart-modat__text"
                >
                    {`${product.cost * product.qty}$`}
                </Typography>
            </Box>
            <Box>
                <IconButton 
                    className="cart-modal__button"
                    onClick={() => removeProduct(product.id)}
                >
                    <DeleteForeverIcon/>
                </IconButton>
            </Box>
        </Box>
    )
}

const mapDispatchToProps = dispatch => ({
    addQty: bindActionCreators(addQty, dispatch), 
    removeQty: bindActionCreators(removeQty, dispatch), 
    removeProduct: bindActionCreators(removeProduct, dispatch)
})

const connector = connect(null, mapDispatchToProps)

export default connector(CartModalItem);