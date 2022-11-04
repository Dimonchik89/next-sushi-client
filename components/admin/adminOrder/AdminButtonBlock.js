import { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useRecordContext } from "react-admin";
import { useSendMailMutation } from "../../../store/api/sushiApi";
import AdminButton from "./AdminButton";
import CircularProgress from '@mui/material/CircularProgress';

// import "../../../style/helper.scss";

const AdminButtonBlock = () => {
    const record = useRecordContext();
    const [sendMessage, { isLoading }] = useSendMailMutation();

    const handleClick = async (url, body) => {
        await sendMessage({url, body})
    }

    if(isLoading) {
        return <Box className="d-flex justify-center">
            <CircularProgress size={15}/>
        </Box>
    }

    return (
        <Box className="d-flex space-between">
            <AdminButton buttonTitle="Accept" record={record} handleClick={handleClick} url="cart/accept" title="You'r order accept" text="You'r order accept to work"/>
            <AdminButton buttonTitle="Send" record={record} handleClick={handleClick} url="cart/send" title="You'r order send" text="You'r order send to you and soon you will have"/>
            <AdminButton buttonTitle="Error" record={record} handleClick={handleClick} url="cart/error" title="We can't deliver you'r order" text="Sorry, We can't deliver you'r order"/>
        </Box>
    )
}

export default AdminButtonBlock;