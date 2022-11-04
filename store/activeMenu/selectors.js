import { createSelector } from "@reduxjs/toolkit";

const baseState = state => state.activeMenu;

export const activeMenu = createSelector(baseState, state => state.activeMenu);