import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PizzaFilter {
    categoryId: number
}

const initialState: PizzaFilter = {
    categoryId: 0
}

export const filterSlice = createSlice({
    name: 'pizzaFilter',
    initialState,
    reducers:{
        setCategoryId(state,action: PayloadAction<number>){
            state.categoryId = action.payload
        }
    }
})

export const {setCategoryId} = filterSlice.actions

export default filterSlice.reducer
