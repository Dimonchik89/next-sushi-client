import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
let token;
if (typeof window !== 'undefined') {
  token = localStorage?.getItem("token");
}


const sushiApi = createApi({
    reducerPath: "sushi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL}),
    endpoints: builder => ({
        getCategory: builder.query({
            query: () => "/category"
        }),
        getSpecial: builder.query({
            query: (arg) => ({
                url: "/special",
                params: {
                    product: JSON.stringify(arg)
                }
            })
        }),
        getProduct: builder.query({
            query: (params) => ({
                url: "/product",
                params: {
                    categoryid: params
                }
            })
        }),
        getAllOrder: builder.query({
            query: () => ({
                url: "/cart",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        }),
        loginUser: builder.mutation({
            query: (body) => ({
                url: "/user/login",
                method: "POST",
                body: body
            })
        }),
        postCart: builder.mutation({
            query: (body) => ({
                url: "/cart",
                method: "POST",
                body: body
            })
        }),
        sendMail: builder.mutation({
            query: ({url, body}) => {
                console.log(body);
                return {
                    url,
                    method: "POST",
                    body: body
                }

            }
        })
    })
})

export const { useGetCategoryQuery, useGetSpecialQuery, useGetProductQuery, useLoginUserMutation, usePostCartMutation, useGetAllOrderQuery, useSendMailMutation } = sushiApi;
export default sushiApi;