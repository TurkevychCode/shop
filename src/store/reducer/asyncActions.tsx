import {AppDispatch} from "../store";
import {fetchPizzas} from "./slices/pizzasSlice";

export const getPizzas = (params: any) => async (dispatch: AppDispatch) => {

    const {categoryIndex, sortIndex,currentPage} = params

    const order = sortIndex.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sortIndex.sortProperty.replace('-', '')
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : ''

    dispatch(fetchPizzas({
        order,
        sortBy,
        category,
        currentPage
    }))
    window.scrollTo(0, 0)

}
