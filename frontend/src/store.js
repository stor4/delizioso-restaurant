import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { api } from "./api";
import { thunk } from 'redux-thunk';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware, thunk)
    
})

setupListeners(store.dispatch)