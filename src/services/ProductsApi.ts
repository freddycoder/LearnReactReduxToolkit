import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from "../models/Product";

export const productApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: window.PRODUCT_API_URL,
    }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], any>({
            query: (args) => '/products',
            providesTags: ['Products'],
        }),
        createProduct: builder.mutation<Product, Product>({
            query: ({id, ...patch}) => ({
                url: '/products',
                method: 'POST',
                body: patch
            }),
            transformResponse: (response: { data: Product }, meta, arg) => response.data,
            invalidatesTags: ['Products'],
        }),
        updateProduct: builder.mutation<Product, Product>({
            query: ({id, ...patch}) => ({
                url: `/products/${id}`,
                method: 'PATCH',
                body: patch
            }),
            transformResponse: (response: { data: Product }, meta, arg) => response.data,
            invalidatesTags: ['Products'],
        }),
        deleteProduct: builder.mutation<Product, string>({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE',
            }),
            transformResponse: (response: { data: Product }, meta, arg) => response.data,
            invalidatesTags: ['Products'],
        }),
    }),
})

export const {
    useGetProductsQuery, 
    useCreateProductMutation,
    useUpdateProductMutation, 
    useDeleteProductMutation } = productApi;
