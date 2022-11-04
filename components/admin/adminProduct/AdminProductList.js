import React, { useEffect } from "react";
import { Datagrid, EditButton, List, NumberField, TextField } from "react-admin";
import { useRecordContext } from 'react-admin';
import AdminProductImage from "./AdminProductImage";

const AdminProductList= () => {

    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <NumberField source="cost" />
                <TextField source="weight"/>
                <TextField source="components"/>
                <TextField source="categoryId"/>
                {/* <TextField source="img"/> */}
                <AdminProductImage/>
                <EditButton />
            </Datagrid>
        </List>
    )
}


export default AdminProductList;