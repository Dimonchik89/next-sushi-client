import React from "react";
import { AutocompleteInput, SimpleForm, TextInput, FileInput, ImageField, EditButton, Edit } from "react-admin";
import { useGetCategoryQuery } from "../../../store/api/sushiApi";

const AdminProductEdit = () => {
    const { data } = useGetCategoryQuery();

    return (
        <Edit>
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
        </Edit>
    )
}

export default AdminProductEdit;