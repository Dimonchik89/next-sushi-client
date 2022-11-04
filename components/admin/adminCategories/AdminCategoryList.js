import React from "react";
import { List, Datagrid, DateField, TextField, EditButton } from 'react-admin';
import BookIcon from '@mui/icons-material/Book';

const AdminCategoryList = () => {

    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <DateField source="createdAt" />
                <DateField source="updatedAt" />
                <EditButton />
            </Datagrid>
        </List>
    )
}
export default AdminCategoryList;