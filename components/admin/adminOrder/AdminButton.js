import { Button, Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

const AdminButton = ({buttonTitle, handleClick, record, url, title, text}) => {

    return (
        <Box>
            <Button
                onClick={() => handleClick(
                    url,
                    { id: record.id, email: record.email, title, text }
                )}
            >
                {buttonTitle}
            </Button>
        </Box>
    )
}
export default AdminButton;