import { Alert, Snackbar } from "@mui/material"

const SnackBar = ({open, handleClose, activeTheme, hideDuration}) => {

    return (
        <>
            <Snackbar open={open} autoHideDuration={hideDuration} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {`Theme ${activeTheme} applied!`}
                </Alert>
            </Snackbar>
        </>
    )
}
export default SnackBar;