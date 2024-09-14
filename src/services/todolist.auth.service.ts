import {baseApi} from "./todolistBaseApi";
import {APIEndpoint} from "common/constants";
import {LoginArgs, LoginResponse, LogoutResponse, MeResponse} from "common/types";

export const authApi = baseApi.injectEndpoints({
    endpoints: builder => {
        return {
            me: builder.query<MeResponse, void>({
                query: () => APIEndpoint.me,
                providesTags: ['profile']
            }),
            login: builder.mutation<LoginResponse, LoginArgs>({
                query: body => {
                    return {
                        url: APIEndpoint.login,
                        method: 'POST',
                        body,
                    }
                },
                invalidatesTags: ['profile']
            }),
            logout: builder.mutation<LogoutResponse, void>({
                query: () => {
                    return {
                        url: APIEndpoint.login,
                        method: 'DELETE',
                    }
                },
                invalidatesTags: ['profile']
            }),
        }
    },
})

export const {
    useMeQuery,
    useLoginMutation,
    useLogoutMutation
} = authApi
