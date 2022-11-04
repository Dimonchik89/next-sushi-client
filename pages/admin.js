import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import axios from "axios";

import AdminCreateType from "../components/admin/adminCategories/AdminCreateType";
import AdminEditType from "../components/admin/adminCategories/AdminEditType";
import AdminProductList from "../components/admin/adminProduct/AdminProductList";
import AdminProductCreate from "../components/admin/adminProduct/AdminProductCreate";
import AdminCategoryList from "../components/admin/adminCategories/AdminCategoryList";
import AdminProductEdit from "../components/admin/adminProduct/AdminProductEdit";
import AdminOrderList from "../components/admin/adminOrder/AdminOrderList";
import AdminCardList from "../components/admin/adminCard/AdminCardList";

import { Admin as AdminComponent, Resource, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})

const Admin = ({theme: serverTheme}) => {
    const [ theme, setTheme ] = useState(serverTheme)
    const [token, setToken] = useState("")
    const router = useRouter();

    useEffect(() => {
        async function load() {
            const response = await instance.get("theme")
            const {theme} = await response.data;
            setTheme(theme)
        }
        if(!serverTheme) {
            load()
        }
    }, [theme, setTheme, serverTheme])


    useEffect(() => {
        setToken(localStorage.getItem("token"))      
    }, [])

    if(!token) {
        return () => router.push('/')
    }

    const decodToken = jwt_decode(token)

    if(decodToken.role !== "ADMIN") {
        return () => router.push('/login')
    }

    if(typeof window === "undefined") {
        return null
    } 
 
    const fetchJson = async (url, options = {}) => {
        const token = localStorage.getItem("token")
        if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' })
        }
        options.headers.set('Authorization', `Bearer ${token}`)

        const data = await fetchUtils.fetchJson(url, options);
        
        if(data.json?.rows) {
            return {...data, json: data.json.rows}
        }        
        return data
    }

    //----------------

    const dataProvider = jsonServerProvider(process.env.NEXT_PUBLIC_BASE_URL, fetchJson);

    const myDataProfider = {
        ...dataProvider,
        create: async (resource, params) => {
            if (!params.data.file) {
                return dataProvider.create(resource, params);
            }
            let formData = new FormData();
            
            formData.append('name', params.data.name);
            formData.append('cost', params.data.cost);
            formData.append('weight', params.data.weight);
            formData.append('components', params.data.components);
            formData.append('categoryId', params.data.categoryId);
            formData.append('img', params.data.file.rawFile);
            
            return fetchJson(`${process.env.NEXT_PUBLIC_BASE_URL}/${resource}`, {
                method: 'POST',
                body: formData,
            }).then(({json}) => ({
                data: { ...params.data, id: json.id },
            }));
        }
    };

    return (
        <>
        <Box className="mt-64">
            <AdminComponent dataProvider={myDataProfider}>
                <Resource name="category" list={AdminCategoryList} create={AdminCreateType} edit={AdminEditType}/>
                <Resource name="product" list={AdminProductList} create={AdminProductCreate} edit={AdminProductEdit}/>
                <Resource name="cart" list={AdminOrderList}/>
                <Resource name="card" list={<AdminCardList theme={theme}/>}/>
            </AdminComponent>
        </Box>
            
        </>
    )
}

Admin.getInitialProps = async ({req}) => {
    if(!req) {
        return {
            theme: null
        }
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}theme`)
    const theme = await response.json();
    return {
        theme
    }
}

export default Admin;



// export async function getStaticProps() {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}theme`)
//     const theme = await response.json();
//   return {
//     props: {
//         theme
//     },
//   }
// }