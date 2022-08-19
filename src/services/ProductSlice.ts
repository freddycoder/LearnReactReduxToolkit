import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../models/Product";

export interface ProductSliceState {
    editProduct?: Product
}

const initialState: ProductSliceState = {
    editProduct: undefined,
}

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setEditProduct(state, action) {
            state.editProduct = action.payload;
        }
    }
})

export const { setEditProduct } = productSlice.actions

export default productSlice.reducer