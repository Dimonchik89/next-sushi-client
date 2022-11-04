import { Box, Avatar, Typography, Rating } from "@mui/material";

const ReviewCard = ({photo, text, rating}) => {

    return (
        <Box className="review-card">
            <Box className="review-card__inner d-flex justify-center align-center">
                    <Avatar
                        className="review__avatar"
                        src={photo}
                        alt="photo"
                    />
                <Box
                    className="review-info"
                >
                    <Typography
                        className="review-card__text"
                    >
                        {text}
                    </Typography>
                    <Box
                        className="review-rating text-center"
                    >
                        <Rating 
                            className="review-card__rating"
                            value={rating} 
                            readOnly 
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default ReviewCard;