import {AppDispatch} from "../store";
import axios from "axios";
import {Pizza} from "./types";
import {pizzasFetchSuccess, setIsLoading} from "./slice";

export const fetchPizzas = (params: any) => async (dispatch: AppDispatch) => {

    try {
        const {categoryIndex, sortIndex} = params

        const order = sortIndex.sortProperty.includes('-') ? 'asc' : 'desc'
        const sortBy = sortIndex.sortProperty.replace('-', '')
        const category = categoryIndex > 0 ? `category=${categoryIndex}` : ''

        const response = await axios.get<Pizza[]>(
            `https://63529bfaa9f3f34c3743f4a5.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
        )
        dispatch(pizzasFetchSuccess(response.data))
        dispatch(setIsLoading(false))
        window.scrollTo(0, 0)
    } catch (e) {
        console.log(e)
    }
}
