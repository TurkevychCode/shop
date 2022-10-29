import {combineReducers, configureStore} from "@reduxjs/toolkit";
import pizzasSlice from "./reducer/slice";
import filterSlice from "./reducer/filter/slice";

export const rootReducer = combineReducers({
    pizzasSlice,
    filterSlice
})

export const setupStore = ()=>{
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore['dispatch']
