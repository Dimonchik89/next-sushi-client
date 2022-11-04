import { Box } from "@mui/material";
import error from "../../static/img/error.gif";

// import "../../style/helper.scss";

const Error = () => {

    return (
        <Box
            className="d-flex justify-center"
        >
            <picture>
                <img src={"../../static/img/error.gif"} alt="error"/>
            </picture>
        </Box>
    )
}
export default Error;