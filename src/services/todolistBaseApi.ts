import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://social-network.samuraijs.com/api/1.1',
        credentials: 'include',
        prepareHeaders: headers => {
            headers.set('API-KEY', '3fa523ce-730a-4178-84e7-5bbf0e36f629')
            return headers
        }
    }),
    endpoints: builder => ({}),
    tagTypes: ['profile', 'todolists', 'tasks']
})

export const {} = baseApi
