import { Box } from "@mui/material";
import { useRecordContext } from "react-admin";

// import "../../../style/helper.scss";

const AdminOrderProduct = () => {
    const router = useRecordContext();
    const products = JSON.parse(router.product);

    const list = products.map((item, i) => (<ul key={i}>
            <li>id: {item.id}</li>
            <li>name: {item.name}</li>
            <li>quantity: {item.qty}</li>
    </ul>))

    return (
        <Box className="d-flex">
            {list}
        </Box>
    )
}
export default AdminOrderProduct;