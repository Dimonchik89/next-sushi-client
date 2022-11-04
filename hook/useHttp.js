import axios from "axios"

const useHttp = () => {

    const instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL
    })

    const getCategories = async (url) => {
        try {
            const response = await instance.get(url)
            const data = await response.data;
            return data
        } catch(e) {
            throw new Error(e)
        }
    }

    const getSpecial = async (url, product) => {
        try {
            const response = await instance.get(url, {
                params: {
                    product: JSON.stringify(product)
                }
            })
            const data = await response.data;
            return data
        } catch(e) {
            throw new Error(e)
        }
    }

    const getProduct = async (url, categoryid) => {
        console.log("categoryid=====", categoryid);
        try {
            const response = await instance.get(url, {
                params: {
                    categoryid
                }
            })
            const data = await response.data;
            return data
        } catch(e) {
            throw new Error(e)
        }
    }

    return {
        getCategories,
        getSpecial,
        getProduct
    }
}

export default useHttp