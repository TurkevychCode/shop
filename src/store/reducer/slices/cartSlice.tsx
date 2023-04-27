import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getCartFromLocalStorage} from "../../../components/untils/getCartFromLocalStorage";
import {calcTotalPrice} from "../../../components/untils/calcTotalPrice";

const {items,totalPrice} = getCartFromLocalStorage()

const initialState = {
    totalPrice,
    items,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addItems(state, action: PayloadAction<any>) {

            const findItem = state.items.find((obj:any) => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                })
            }
            state.totalPrice = calcTotalPrice(state.items)
        },
        minusItem(state, action: PayloadAction<any>) {
            const findItem = state.items.find((obj:any) => obj.id === action.payload)
            if (findItem) {
                findItem.count--
            }
        },
        removeItems(state, action: PayloadAction<any>) {
            state.items = state.items.filter((obj:any) => obj.id !== action.payload)
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
        }
    }
})

export const {addItems, removeItems, clearItems,minusItem} = cartSlice.actions

export default cartSlice.reducer
