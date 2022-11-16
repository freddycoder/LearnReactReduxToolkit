import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { DocumentFormModel } from "../../models/DocumentFormModel";

export interface DocumentSliceState {
    editDocument?: DocumentFormModel
}

const initialState: DocumentSliceState = {
    editDocument: undefined
}

export const documentSlice = createSlice({
    name: 'document',
    initialState: initialState,
    reducers: {
        setTitle(state, action) {
            state.editDocument!.name = action.payload
        },
        setDescription(state, action) {
            state.editDocument!.description = action.payload
        }
    }
})

export const {
    setTitle,
    setDescription } = documentSlice.actions

export const selectDocumentSlice = (state: RootState) => state.documentSlice

export default documentSlice.reducer