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
        login(state, {payload}){
            console.log('LOGIN', state, payload)
            const decoded = jwtDecode(payload.token)
            if (decoded) {
                state.payload = payload
                state.token = payload.token
           }
        },
        logout(state){
            state.payload = null
            state.payload = null
        }
    }
})

export default authSlice