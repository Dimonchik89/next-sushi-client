import React from "react";
import { AutocompleteInput, Create, SimpleForm, TextInput, FileInput, ImageField, EditButton } from "react-admin";
import { useGetCategoryQuery } from "../../../store/api/sushiApi";

const AdminProductCreate = (props) => {
    const { data } = useGetCategoryQuery();

    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="cost" />
                <TextInput source="weight" />
                <TextInput source="components" />
                <AutocompleteInput source="categoryId" choices={data}/>
                <FileInput source="file" label="Related pictures" accept="image/*">
                    <ImageField source="src" title="files"/>
                </FileInput>
                <EditButton />
            </SimpleForm>
        </Create>
    )
}

export default AdminProductCreate;