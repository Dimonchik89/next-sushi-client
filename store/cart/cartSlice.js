import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    showModal: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            
            if(state.product.length) {
                let goodInc = false;
                state.product?.forEach((item, i) => {
                    if(item.id === action.payload.id) {
                        goodInc = true;
                        state.product.splice(i, 1, {...item, qty: item.qty + 1})
                        
                    }
                })
                if(!goodInc) {
                    state.product.push(action.payload)
                }
            } else {
                state.product.push(action.payload)
            }
        },
        clearProduct: (state) => {
            state.product = []
        },
        removeProduct: (state, action) => {
            state.product = state.product.filter(item => item.id !== action.payload)
        },
        openCart: state => {
            state.showModal = true;
        },
        closeCart: state => {
            state.showModal = false;
        },
        addQty: (state, action) => {
            state.product = state.product.map(item => item.id === action.payload ? {...item, qty: item.qty + 1} : item)
        },
        removeQty: (state, action) => {
            state.product = state.product.map(item => item.id === action.payload ? {...item, qty: item.qty - 1} : item)
        }
    }
})

const { reducer, actions } = cartSlice;
export const { addProduct, removeProduct, openCart, closeCart, addQty, removeQty, clearProduct } = actions;
export default reducer;