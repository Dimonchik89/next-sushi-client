import React, { useEffect } from "react";
import { Datagrid, List, TextField } from "react-admin";
import AdminButtonBlock from "./AdminButtonBlock";
import AdminOrderProduct from "./AdminOrderProduct";

const AdminOrderList = () => {

    return (
        <List >
            <Datagrid>
                <TextField source="id"/>
                <TextField source="date" />
                <TextField source="email" />
                {/* <TextField source="product" /> */}
                <AdminOrderProduct source="product"/>
                <AdminButtonBlock/>
            </Datagrid>
        </List>
    )
}
export default AdminOrderList;