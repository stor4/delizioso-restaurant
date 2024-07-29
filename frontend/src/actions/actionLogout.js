import authSlice from "../slices/authSlice"

const actionLogout = () =>
    async dispatch => {
        dispatch(authSlice.actions.logout())
    }

export default actionLogout