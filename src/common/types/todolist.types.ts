import {GeneralResponse} from "./generalResponse";
import {z} from "zod";

export type TodolistEntity = {
    id: string,
    title: string,
    addedDate: Date,
    order: number
}

export type CreateTodolistArgs = {
    title: string
}
export type CreateTodolistResponse = GeneralResponse<{ item: TodolistEntity }>

export type DeleteTodolistArgs = {
    todolistId: string
}
export type DeleteTodolistResponse = GeneralResponse<{}>

export type UpdateTodolistArgs = {
    todolistId: string
    title: string
}
export type UpdateTodolistResponse = GeneralResponse<{ item: TodolistEntity }>

export const addEntitySchema = z.object({
    title: z.string()
        .min(1, 'Title is required')
        .max(100, 'The title length must not exceed 100 characters.'),
});

export type AddEntityForm = z.infer<typeof addEntitySchema>;
