import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import cart from "./cart/cartSlice";
import sushiApi from "./api/sushiApi";
import activeMenu from "./activeMenu/activeMenuSlice";

const store = configureStore({
    reducer: {
        cart,
        activeMenu,
        [sushiApi.reducerPath]: sushiApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sushiApi.middleware)
})

setupListeners(store.dispatch)

export default store;