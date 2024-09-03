import authSlice from "../slices/authSlice"
import { AppDispatch } from "../store"

const actionLogout = () =>
    async (dispatch:AppDispatch) => {
        dispatch(authSlice.actions.logout())
    }

export default actionLogout