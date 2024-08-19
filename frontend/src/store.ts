import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
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

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

setupListeners(store.dispatch)