import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { ProductFormModel } from "../models/ProductFormModel";

export interface ProductSliceState {
    productFormTitle: string
    productFormButtonText: string
    editProduct?: ProductFormModel
    formVisible: boolean
}

const initialState: ProductSliceState = {
    productFormTitle: "Ajouter un produit",
    productFormButtonText: "Ajouter",
    editProduct: undefined,
    formVisible: false
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
            if (action.payload?.id) {
                state.productFormTitle = "Modifier un produit"
                state.productFormButtonText = "Modifier"
            }
            else {
                state.productFormTitle = "Ajouter un produit"
                state.productFormButtonText = "Ajouter"
            }
            state.editProduct = action.payload
        },
        setFormVisible(state, action) {
            state.formVisible = action.payload
        },
        setTitle(state, action) {
            state.editProduct!.title = action.payload
        },
        setDescription(state, action) {
            state.editProduct!.description = action.payload
        },
        setPrice(state, action) {
            state.editProduct!.price = action.payload
        }
    }
})

export const { 
    setProductFormTitle, 
    setProductFormButtonText, 
    setEditProduct,
    setFormVisible,
    setTitle,
    setDescription,
    setPrice } = productSlice.actions

export const selectProductSlice = (state: RootState) => state.productSlice

export default productSlice.reducer