import { AppDispatch, store } from "../store";
import { api } from "../api";
import { actionFullLogin } from "./actionFullLogin";

const actionFullSignUp = (username: string, password: string, email: string) => async (dispatch:AppDispatch) => {
  try {
    const result = await dispatch(api.endpoints.register.initiate({ username, password, email })).unwrap();

    if (result?.token) {
      await dispatch(actionFullLogin( username, password ));
      console.log('State after signup:', store.getState());
    }

    return result;
  } catch (error) {
    console.error('Sign-up failed:', error);
  }
};

export default actionFullSignUp;
