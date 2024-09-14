export type GeneralResponse<T> = {
    resultCode: number
    messages: string[],
    data: T
}
