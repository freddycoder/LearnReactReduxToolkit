import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DocumentIdModel } from '../../models/DocumentIdModel';
import { DocumentModel } from '../../models/DocumentModel';

declare global {
    interface Window {
        PRODUCT_API_URL: string;
    }
}

export const documentApi = createApi({
    reducerPath: 'documentsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: window.PRODUCT_API_URL,
    }),
    tagTypes: ['Documents'],
    endpoints: (builder) => ({
        getDocuments: builder.query<DocumentModel[], any>({
            query: (args) => '/documents',
            providesTags: ['Documents'],
        }),
        postDocument: builder.mutation<DocumentIdModel, FormData>({
            query: (document) => ({
                url: '/documents/upload',
                method: 'POST',
                body: document,
            }),
            invalidatesTags: ['Documents'],
        }),
        putDocument: builder.mutation<DocumentIdModel, DocumentModel>({
            query: ({id, ...patch}) => ({
                url: '/documents',
                method: 'PUT',
                body: patch
            }),
            invalidatesTags: ['Documents'],
        }),
        deleteDocument: builder.mutation<any, string>({
            query: (id) => ({
                url: `/documents/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Documents'],
        }),
    }),
})

export const {
    useGetDocumentsQuery, 
    usePostDocumentMutation,
    usePutDocumentMutation,
    useDeleteDocumentMutation } = documentApi;
