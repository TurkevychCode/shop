import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Pizza} from "./types";

interface PizzaState {
    pizzas: Pizza[]
    pizzasCounter: number
    isLoading: boolean
    categoryIndex: number
    sortIndex: any
    searchValue: string
}

const initialState: PizzaState = {
    pizzas: [],
    pizzasCounter: 0,
    isLoading: true,
    categoryIndex: 0,
    sortIndex: {name: 'популярності', sortProperty: 'rating'},
    searchValue: ''
}

export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        pizzasFetchSuccess(state, action: PayloadAction<Pizza[]>) {
            state.pizzas = action.payload
        },
        setPizzasCounter(state, action: PayloadAction<number>) {
            state.pizzasCounter = action.payload
        },
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setCategory(state, action: PayloadAction<number>) {
            state.categoryIndex = action.payload
        },
        setSortIndex(state, action: PayloadAction<number>) {
            state.sortIndex = action.payload
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setFilters(state, action: PayloadAction<any>) {
            state.sortIndex = action.payload.sortIndex
            state.categoryIndex = Number(action.payload.categoryIndex)
        }
    }
})
export const {
    pizzasFetchSuccess,
    setPizzasCounter,
    setIsLoading,
    setCategory,
    setSortIndex,
    setSearchValue,
    setFilters
} = pizzasSlice.actions

export default pizzasSlice.reducer
