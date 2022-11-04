import { Box, TextField, Button } from "@mui/material";

const CartModalBuy = ({product, handleSend, email, handleChangeMail}) => {
    return (
        <Box
            className="align-center justify-center"
            sx={{display: product.length ? "flex" : "none", alignItems: "center", marginTop: "2rem"}}
        >
            <TextField
                className="cart-modat__input"
                placeholder="Your email"
                value={email}
                onChange={handleChangeMail}
            />
            <Box
                sx={{marginLeft: "2rem"}}
            >
                <Button
                    className="button__sm button__green"
                    onClick={handleSend}
                >
                    Buy
                </Button>
            </Box>
        </Box>
    )
}
export default CartModalBuy;