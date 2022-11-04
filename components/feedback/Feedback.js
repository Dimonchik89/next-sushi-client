import { Box, Typography } from "@mui/material";
import message from "../../static/icon/message.png";

const Feedback = () => {

    return (
        <Box className="feedback">
            <Box
                className="d-flex justify-center align-center"
            >
                <picture>
                    <img 
                        className="feedback__icon"
                        src={"../../static/icon/message.png"} 
                        alt="message"
                    />
                </picture>
                <Typography
                    className="feedback__text"
                >
                    Leave your feedback about the sushi place or a recent delivery
                </Typography>
            </Box>
        </Box>
    )
}
export default Feedback;