import React, {FC, useEffect, useRef, useState} from "react";
import './sorts.scss'
import {GoTriangleUp} from "@react-icons/all-files/go/GoTriangleUp";
import {useAppDispatch} from "../../hooks/redux";
import {setSortIndex} from "../../store/reducer/slice";
import {list} from "./SortObj";

interface PizzaProps {
    sortIndex: any
}

export const Sorts: FC<PizzaProps> = ({sortIndex}) => {
    const [open, setOpen] = useState<boolean>(false);


    const dispatch = useAppDispatch();
    const sortRef = useRef() as React.MutableRefObject<HTMLInputElement>

    const onClickList = (obj: any) => {
        dispatch(setSortIndex(obj))
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutSide = (event:any) => {
            if (!event.composedPath().includes(sortRef.current)){
                setOpen(false)
                console.log(event)
            }
        }
        document.body.addEventListener('click', handleClickOutSide)

        return ()=>{
            document.body.removeEventListener('click', handleClickOutSide)
        }
    }, [])

    console.log(sortRef)

    return (
        <div ref={sortRef} className='sorts'>
            <GoTriangleUp height={30}/>
            <b>сортувати по :</b>
            <div className='sorts-span' onClick={() => setOpen(!open)}>{sortIndex.name}</div>
            {open && (
                <ul>
                    {
                        list.map((obj, i) => (
                            <li
                                key={i}
                                className={sortIndex.sortProperty === obj.sortProperty ? 'active' : ''}
                                onClick={() => onClickList(obj)}>
                                {obj.name}
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    );
}
