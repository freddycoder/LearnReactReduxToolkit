import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Product } from "../models/Product";

export interface ProductSliceState {
    productFormTitle: string
    editProduct?: Product
}

const initialState: ProductSliceState = {
    productFormTitle: "Ajouter un produit",
    editProduct: undefined
}

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setProductFormTitle: (state, action) => {
            state.productFormTitle = action.payload
        },
        setEditProduct(state, action) {
            state.editProduct = action.payload
        }
    }
})

export const { setEditProduct } = productSlice.actions

export const selectSimulation = (state: RootState) => state.productsApi

export default productSlice.reducer