import {baseApi} from "./todolistBaseApi";
import {
    CreateTodolistArgs,
    CreateTodolistResponse, DeleteTodolistArgs, DeleteTodolistResponse,
    TodolistEntity,
    UpdateTodolistArgs,
    UpdateTodolistResponse
} from "types/todolist.types";
import {APIEndpoint} from "../common/constants";


export const todolistApi = baseApi.injectEndpoints({
    endpoints: builder => {
        return {
            getTodolists: builder.query<TodolistEntity[], void>({
                query: () => APIEndpoint.todolists,
                providesTags: ['todolists']
            }),
            createTodolist: builder.mutation<CreateTodolistResponse, CreateTodolistArgs>({
                query: body => {
                    return {
                        url: APIEndpoint.todolists,
                        method: 'POST',
                        body,
                    }
                },
                invalidatesTags: ['todolists']
            }),
            updateTodolist: builder.mutation<UpdateTodolistResponse, UpdateTodolistArgs>({
                query: ({todolistId, ...body}) => {
                    return {
                        url: `${APIEndpoint.todolists}/${todolistId}`,
                        method: 'PUT',
                        body,
                    }
                },
                invalidatesTags: ['todolists']
            }),
            deleteTodolist: builder.mutation<DeleteTodolistResponse, DeleteTodolistArgs>({
                query: ({todolistId}) => {
                    return {
                        url: `${APIEndpoint.todolists}/${todolistId}`,
                        method: 'DELETE',
                    }
                },
                invalidatesTags: ['todolists']
            }),
        }
    },
})

export const {
    useGetTodolistsQuery,
    useCreateTodolistMutation,
    useDeleteTodolistMutation,
    useUpdateTodolistMutation
} = todolistApi
