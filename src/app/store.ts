import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { documentApi } from '../services/document/DocumentApi';
import { documentSlice } from '../services/document/DocumentSlice';
import { productApi } from '../services/produit/ProductsApi';
import { productSlice } from '../services/produit/ProductSlice';
import { errorManagementMiddleware } from './middlewares/errorManagementMiddleware';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [documentApi.reducerPath]: documentApi.reducer,
    productSlice: productSlice.reducer,
    documentSlice: documentSlice.reducer

  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productApi.middleware).concat(documentApi.middleware).concat(errorManagementMiddleware)
  },
});

setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>