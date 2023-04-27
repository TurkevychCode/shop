import React, {FC, useEffect, useState} from "react";
import {Content} from "../content/Content";
import {getPizzas} from "../../store/reducer/asyncActions";
import {useAppDispatch, useAppNavigate, useAppSelector} from "../../hooks/redux";
import {PizzasBlock} from "../pizzasBlock/PizzasBlock";
import {PizzasType} from "../pizzasType/PizzasType";
import {Header} from "../header/Header";
import qs from "qs";
import {Pagination} from "../pagination/Pagination";
import {list} from "../sorts/SortObj";
import './homeWindow.scss'


export const HomeWindow: FC = () => {

    const {
        categoryIndex,
        sortIndex,
        searchValue,
    } = useAppSelector((state) => state.filterSlice)

    const {pizzas, status} = useAppSelector((state) => state.pizzaSlice)

    const [currentPage, setCurrentPage] = useState(1)


    const dispatch = useAppDispatch();
    const navigate = useAppNavigate();

    useEffect(() => {
        const params = qs.parse(window.location.search.substring(1))
        list.find((obj) => obj.sortProperty === params.sortProperty);
    }, [])


    useEffect(() => {
        dispatch(getPizzas({categoryIndex, sortIndex,currentPage}))
    }, [categoryIndex, sortIndex,currentPage])


    useEffect(() => {
        const queryString = qs.stringify({
            sortProperty: sortIndex.sortProperty,
            categoryIndex,
        });
        navigate(`?${queryString}`)
    }, [categoryIndex, sortIndex])

    if (!pizzas) {
        return <>Loading...</>
    }

    return (
        <div className='homeWindow'>
            <Header searchValue={searchValue}/>
            <Content categoryIndex={categoryIndex} sortIndex={sortIndex}/>
            <PizzasType/>
            <PizzasBlock pizzas={pizzas} status={status} searchValue={searchValue}/>
            <Pagination onChangePage={(number:number) => setCurrentPage(number)}/>
        </div>
    );
}
