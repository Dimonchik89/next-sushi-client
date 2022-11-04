import { Box, Container, Typography } from "@mui/material";
import WorkTimeSchedule from "./WorkTimeSchedule";

const WorkTime = () => {

    return (
        <Box className="work-time">
            <Container maxWidth="xl">
                <Box 
                    className="d-flex justify-start align-center work-time__inner"
                >
                    <Box 
                        className="work-time__item d-flex d-column align-center"
                    >
                        <Box className="work-time__title-wrapper">
                            <Typography
                                className="work-time__title"
                            >
                                Opening Times
                            </Typography>
                            <Typography
                                className="work-time__subtitle"
                            >
                                opening 7 days week
                            </Typography>
                        </Box>

                        <Box className="work-time__schedule">
                            <WorkTimeSchedule title="Week Days" time="9:30 am - 9:00 pm"/>
                            <WorkTimeSchedule title="Saturday" time="9:00 am - 10:00 pm"/>
                            <WorkTimeSchedule title="Sunday" time="8:30 am - 10:00 pm"/>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default WorkTime;