import { createSelector } from "@reduxjs/toolkit";

const baseState = state => state.cart;

export const product = createSelector(baseState, state => state.product);
export const showModal = createSelector(baseState, state => state.showModal);