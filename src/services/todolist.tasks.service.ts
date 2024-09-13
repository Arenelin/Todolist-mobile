import {baseApi} from "./todolistBaseApi";
import {APIEndpoint} from "common/constants";
import {
    CreateTaskArgs,
    CreateTaskResponse,
    DeleteTaskArgs, DeleteTaskResponse, GetTaskArgs, GetTasksResponse,
    TaskEntity,
    UpdateTaskArgs,
    UpdateTaskResponse
} from "types";


export const taskApi = baseApi.injectEndpoints({
    endpoints: builder => {
        return {
            getTasks: builder.query<GetTasksResponse, GetTaskArgs>({
                query: ({todolistId}) => `${APIEndpoint.todolists}/${todolistId}/tasks`,
                providesTags: ['tasks']
            }),
            createTask: builder.mutation<CreateTaskResponse, CreateTaskArgs>({
                query: ({todolistId, ...body}) => {
                    return {
                        url: `${APIEndpoint.todolists}/${todolistId}/tasks`,
                        method: 'POST',
                        body,
                    }
                },
                invalidatesTags: ['tasks']
            }),
            updateTask: builder.mutation<UpdateTaskResponse, UpdateTaskArgs>({
                query: ({todolistId, taskId, ...body}) => {
                    return {
                        url: `${APIEndpoint.todolists}/${todolistId}/tasks/${taskId}`,
                        method: 'PUT',
                        body,
                    }
                },
                invalidatesTags: ['tasks']
            }),
            deleteTask: builder.mutation<DeleteTaskResponse, DeleteTaskArgs>({
                query: ({todolistId, taskId}) => {
                    return {
                        url: `${APIEndpoint.todolists}/${todolistId}/tasks/${taskId}`,
                        method: 'DELETE',
                    }
                },
                invalidatesTags: ['tasks']
            }),
        }
    },
})

export const {
    useGetTasksQuery,
    useCreateTaskMutation,
    useDeleteTaskMutation,
    useUpdateTaskMutation
} = taskApi
