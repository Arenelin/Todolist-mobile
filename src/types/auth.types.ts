import {GeneralResponse} from "./generalResponse";
import {z} from 'zod';

export type MeResponse = GeneralResponse<{
    id: number,
    email: string,
    login: string
}>

export type LoginArgs = {
    email: string
    password: string
}

export type LoginResponse = GeneralResponse<{
    userId: number
}>
export type LogoutResponse = GeneralResponse<{}>

export const authSchema = z.object({
    email: z.string().min(1, 'Email is required'),
    password: z.string().min(1, 'Password is required')
});

export type AuthForm = z.infer<typeof authSchema>;
