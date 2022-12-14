import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const AdminCreateType = (props) => {

    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="name" />
            </SimpleForm>
        </Create>
    )
}
export default AdminCreateType;