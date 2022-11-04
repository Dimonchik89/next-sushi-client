import { Box, Button } from "@mui/material";
import Cart from "../cart/Cart";

// import "../../style/button.scss";
// import "../../style/preview.scss";

const Preview = () => {

    return (
        <Box
            className="preview"
        >
            <Button
                className="button__xl button__green preview__button"
            >
                Order NOW
            </Button>
            <Cart/>
        </Box>
    )
}
export default Preview;