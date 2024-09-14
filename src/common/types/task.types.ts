import {GeneralResponse} from "./generalResponse";

export type TaskEntity = {
    description: string
    title: string
    status: TaskStatus
    priority: number
    startDate: Date
    deadline: Date
    id: string
    todoListId: string
    order: number
    addedDate: Date
}

export enum TaskStatus {
    NotCompleted = 0,
    Completed = 1
}

export type GetTasksResponse = {
    items: TaskEntity[]
    totalCount: number
    error: string
}
export type GetTaskArgs = {
    todolistId: string
}
export type CreateTaskArgs = {
    todolistId: string
    title: string
}
export type CreateTaskResponse = GeneralResponse<{ item: TaskEntity }>

export type DeleteTaskArgs = {
    taskId: string
    todolistId: string
}
export type DeleteTaskResponse = GeneralResponse<{}>

export type UpdateTaskArgs = {
    taskId: string
    todolistId: string
    title: string
    completed?: boolean
    description?: string
    status?: number
    priority?: number
    startDate?: Date
    deadline?: Date
}
export type UpdateTaskResponse = GeneralResponse<{ item: TaskEntity }>
