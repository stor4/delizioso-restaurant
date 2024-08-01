import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const serverURL = 'http://localhost:5001'

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
        allFood: builder.query({
            query: ({page, limit, category }) => `food/all?page=${page}&limit=${limit}&category=${category}`
        }),
        getFoodByCategory: builder.query({
            query: (query) => `food/category/${query}`
        }),
        getReservationDates: builder.query({
            query: () => `reservations/available-dates`
        }),
        getReservationTime: builder.query({
            query: (date) => `reservations/available-slots?date=${date}`
        }),
        postReservation: builder.mutation({
            query: ({date, time, people, customerName, customerPhone}) => ({
                url: `reservations/reserve`,
                method: 'POST',
                body: {date, time, people, customerName, customerPhone}
            })
        })
    })

})

export const {
    useRegisterMutation,
    useAllFoodQuery,
    useGetFoodByCategoryQuery,
    usePostReservationMutation,
    useGetReservationDatesQuery,
    useGetReservationTimeQuery,

} = api