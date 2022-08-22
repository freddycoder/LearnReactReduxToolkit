import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Product } from "../models/Product";

export interface ProductSliceState {
    productFormTitle: string
    productFormButtonText: string
    editProduct?: Product
}

const initialState: ProductSliceState = {
    productFormTitle: "Ajouter un produit",
    productFormButtonText: "Ajouter",
    editProduct: undefined
}

export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setProductFormTitle: (state, action) => {
            state.productFormTitle = action.payload
        },
        setProductFormButtonText: (state, action) => {
            state.productFormButtonText = action.payload
        },
        setEditProduct(state, action) {
            state.editProduct = action.payload
        }
    }
})

export const { setProductFormTitle, setProductFormButtonText, setEditProduct } = productSlice.actions

export const selectProductSlice = (state: RootState) => state.productSlice

export default productSlice.reducer