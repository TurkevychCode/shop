import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import {Pizza} from "../types";
import axios from "axios";

interface PizzaState {
    pizzas: Pizza[],
    status: string,

}

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params: any) => {
        const {category, sortBy, order,currentPage} = params
        const {data} = await axios.get<Pizza[]>(
            `https://63529bfaa9f3f34c3743f4a5.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}`)
        return data
    },
)


const initialState: PizzaState = {
    pizzas: [],
    status: 'loading',
}



export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {

    },

    extraReducers: {
        [fetchPizzas.pending as any]: (state: any) => {
            state.status = 'loading'
            state.pizzas = []
        },

        [fetchPizzas.fulfilled as any]: (state: any, action: PayloadAction<Pizza[]>) => {

            state.pizzas = action.payload
            state.status = 'success'
        },

        [fetchPizzas.rejected as any]: (state: any) => {
            state.status = 'Error'
            state.pizzas = []
        },
    }

})
export const {} = pizzaSlice.actions

export default pizzaSlice.reducer
