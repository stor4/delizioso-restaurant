import { createSlice } from '@reduxjs/toolkit'

const jwtDecode = token => {
    try {
        return JSON.parse(atob(token.split('.')[1]))
    }
    catch(e){
        console.log(e)
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {token: null, payload: null},
    reducers: {
        login(state, {payload: token}){
            console.log('LOGIN', state, token)
           // console.log(token)
            //const payload = jwtDecode(token)
            //if (payload) {
                state.payload = token
                state.token = token
           // }
        },
        logout(state){
            state.payload = null
            state.payload = null
        }
    }
})

export default authSlice