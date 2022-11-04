import { Alert, Snackbar, Stack } from "@mui/material";

const CartStack = ({open, handleClose}) => {

    return (
        <Stack>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Your order is accepted
                </Alert>
            </Snackbar>
        </Stack>
    )
}
export default CartStack;   