import {combineReducers, configureStore} from "@reduxjs/toolkit";
import filterSlice from "./reducer/slices/Filterslice";
import cartSlice from "./reducer/slices/cartSlice";
import pizzaSlice from "./reducer/slices/pizzasSlice";


export const rootReducer = combineReducers({
    filterSlice,
    cartSlice,
    pizzaSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore['dispatch']
