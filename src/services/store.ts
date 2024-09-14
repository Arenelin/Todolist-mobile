import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {baseApi} from "./todolistBaseApi";


const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
    devTools: true,
})
