import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';
import authSlice from '../slices/authSlice';
import { AppThunk, store } from '../store';
import { AppDispatch } from '../store';

export const actionFullLogin = (username: string, password: string):AppThunk<Promise<object>> =>
    async (dispatch)  => {
      try {
        const response = await dispatch(api.endpoints.login.initiate({ username, password })).unwrap();
  
        if (response?.username) {
          console.log(response)
          dispatch(authSlice.actions.login(response));
          console.log(store.getState())
        }
        return response;
        
      } catch (error) {
  
        console.error('Login failed:', error);
        throw error;
      }
    }