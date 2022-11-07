import { Box, Typography } from "@mui/material"

const Error = () => {

    return (
        <Box className="d-flex d-column justify-center align-center">
            <Box>
                <Typography
                    className="title"
                >
                    The server is not responding, reload page
                </Typography>
                <picture>
                    <img
                        src='../static/img/error_3.gif'
                        alt='error'
                    />
                </picture>
            </Box>
        </Box>
    )
}
export default Error;