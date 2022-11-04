import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeMenu: 2
}

const activeMenuSlice = createSlice({
    name: "activeMenu",
    initialState,
    reducers: {
        changeActiveMenu: (state, action) => {
            state.activeMenu = action.payload
        }
    }
})

const { actions, reducer } = activeMenuSlice;
export const { changeActiveMenu } = actions;
export default reducer;