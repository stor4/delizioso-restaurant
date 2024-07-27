import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const serverURL = 'http://localhost:5000'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: serverURL}),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: ({username, password, email}) => ({
                url: 'auth/register',
                method: 'POST',
                body: {username, password, email},
                headers: {
                    "Content-Type": 'application/json'
                },
            }),
        }),
        login: builder.mutation({
            query: ({username, password}) => ({
                url: '/auth/login',
                method: 'POST',
                body: {username, password},
                headers: {
                    "Content-Type": "application/json",
                },
                // credentials: 'include',
            }),
        }),
    })

})

export const {useRegisterMutation,

} = api