// import { api } from "../api";
import { store } from "../store";
// import { actionFullLogin } from "./actionFullLogin";

// const actionFullSignUp = (username, password, email) =>
//     async dispatch => {
//         try {
//             const result = await dispatch(api.endpoints.register.initiate({username, password, email}))
//             if (result?.data?.token){
//                 await dispatch(actionFullLogin(username, password))
//                 console.log(store.getState())
//             }
//             return result;
//         } catch (error) {
//             console.error('Login failed:', error);
//         }
        
//     }

// export default actionFullSignUp

import { api } from "../api";
import { actionFullLogin } from "./actionFullLogin";

const actionFullSignUp = (username, password, email) => async (dispatch) => {
  try {
    // Выполнение регистрации
    const result = await dispatch(api.endpoints.register.initiate({ username, password, email })).unwrap();

    // Если токен возвращен, выполняем логин
    if (result?.token) {
      // Передача правильных данных в actionFullLogin
      await dispatch(actionFullLogin( username, password ));
      console.log('State after signup:', store.getState());
    }

    return result;
  } catch (error) {
    console.error('Sign-up failed:', error);
  }
};

export default actionFullSignUp;
