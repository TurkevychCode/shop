import React, {FC, useEffect} from "react";
import {Content} from "../content/Content";
import {fetchPizzas} from "../../store/reducer/asyncActions";
import {useAppDispatch, useAppNavigate, useAppSelector} from "../../hooks/redux";
import {PizzasBlock} from "../pizzasBlock/PizzasBlock";
import {PizzasType} from "../pizzasType/PizzasType";
import {Header} from "../header/Header";
import qs from "qs";
import {Pagination} from "../pagination/Pagination";
import {setIsLoading} from "../../store/reducer/slice";
import {list} from "../sorts/SortObj";
import './homeWindow.scss'


export const HomeWindow: FC = () => {

    const {
        pizzas,
        pizzasCounter,
        isLoading,
        categoryIndex,
        sortIndex,
        searchValue,
    } = useAppSelector((state) => state.pizzasSlice)

    const dispatch = useAppDispatch();
    const navigate = useAppNavigate();

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const sort = list.find((obj) => obj.sortProperty === params.sortProperty)
        }
    }, [])



    useEffect(() => {
        dispatch(setIsLoading(true))
        dispatch(fetchPizzas({categoryIndex, sortIndex}))
    }, [categoryIndex, sortIndex])



    useEffect(() => {
        const queryString = qs.stringify({
            sortProperty: sortIndex.sortProperty,
            categoryIndex,
        });
        navigate(`?${queryString}`)
    }, [categoryIndex, sortIndex])



    return (
        <div className='homeWindow'>
            <Header searchValue={searchValue}/>
            <Content categoryIndex={categoryIndex} sortIndex={sortIndex}/>
            <PizzasType/>
            <PizzasBlock pizzas={pizzas} pizzasCounter={pizzasCounter} isLoading={isLoading} searchValue={searchValue}/>
            <Pagination/>
        </div>
    );
}
