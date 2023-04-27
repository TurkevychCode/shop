import React, {FC, useCallback} from "react";
import {Categories} from "../categories/Categories";
import {Sorts} from "../sorts/Sorts";
import './content.scss'
import {useAppDispatch} from "../../hooks/redux";
import {setCategory} from "../../store/reducer/slices/Filterslice";

interface PizzaProps {
    categoryIndex: number
    sortIndex: {}
}

export const Content: FC<PizzaProps> = ({categoryIndex, sortIndex}) => {
    const dispatch = useAppDispatch();
    const onChangeCategory = useCallback((id:number) => {
        dispatch(setCategory(id))
    },[])
    return (
        <div className='navigation'>
            <Categories categoryIndex={categoryIndex} onClickCategory={onChangeCategory}/>
            <Sorts sortIndex={sortIndex}/>
        </div>
    );
}
