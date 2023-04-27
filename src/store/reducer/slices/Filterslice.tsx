import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Pizza} from "../types";

interface PizzaState {
    pizzas: Pizza[]
    categoryIndex: number
    sortIndex: any
    searchValue: string
}

const initialState: PizzaState = {
    pizzas: [],
    categoryIndex: 0,
    sortIndex: {name: 'популярності', sortProperty: 'rating'},
    searchValue: '',
}

export const filterSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {

        setCategory(state, action: PayloadAction<number>) {
            state.categoryIndex = action.payload
        },
        setSortIndex(state, action: PayloadAction<number>) {
            state.sortIndex = action.payload
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        }

    }
})
export const {
    setCategory,
    setSortIndex,
    setSearchValue,
} = filterSlice.actions

export default filterSlice.reducer
