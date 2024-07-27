// import { api } from '../api'
// import authSlice from '../slices/authSlice'
// import { createAsyncThunk } from '@reduxjs/toolkit'


// export const actionFullLogin = createAsyncThunk(
//     'auth/login',
//     async ({ username, password }, { dispatch }) => {
//       const response = await dispatch(api.endpoints.login.initiate({ username, password }));
//       if (response?.data?.username) {
//         dispatch(authSlice.actions.login(response.data.username));
//         console.log(response)
//       }
//       return response;
//     }
//   );

import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';
import authSlice from '../slices/authSlice';

export const actionFullLogin = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { dispatch }) => {
    try {
      // Получение данных из API
      const response = await dispatch(api.endpoints.login.initiate({ username, password })).unwrap();
      // Проверка и выполнение логина
      if (response?.username) {
        dispatch(authSlice.actions.login(response.username));
      }
      return response;
    } catch (error) {
      // Обработка ошибок
      console.error('Login failed:', error);
      throw error; // Переброс ошибки в компонент для дальнейшей обработки
    }
  }
);
