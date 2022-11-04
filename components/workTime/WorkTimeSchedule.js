import { Box, Typography } from "@mui/material"

const WorkTimeSchedule = ({title, time}) => {

    return (
        <Box 
            className="d-flex space-between work-time__schedule-item"
        >
            <Typography>
                {title}
            </Typography>
            <Typography>
                {time}
            </Typography>
        </Box>
    )
}
export default WorkTimeSchedule;