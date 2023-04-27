import {FC, useState} from "react";
import './pizzaItems.scss'
import {Pizza} from "../../store/reducer/types";
import {BiPlus} from "@react-icons/all-files/bi/BiPlus";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

import {addItems} from "../../store/reducer/slices/cartSlice";
import {Link} from "react-router-dom";

interface PizzaProps {
    pizza: Pizza
}

export const PizzaItems: FC<PizzaProps> = ({pizza}) => {
    const {id, title, price, imageUrl, sizes} = pizza
    const {items} = useAppSelector((state) => state.cartSlice)
    const cartItems = items.find((obj:any) => obj.id === id)

    const [activeType, setActiveType] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const typeNames: string[] = ['тонка', 'традиційна'];


    const addedCount = cartItems ? cartItems.count : 0;

    const dispatch = useAppDispatch();

    const onClickAdd = () => {
        const item = {
            id,
            title,
            price,
            imageUrl,
            types: typeNames[activeType],
            size: sizes[activeIndex]
        }
        dispatch(addItems(item))
    }


    return (
        <div className='pizzaBlock'>
            <Link to={`/pizza/${pizza.id}`}
                  className='linkStyle'
                  key={pizza.id}>
                <div className='pizzaBlock-block'>
                    <img className='pizzaBlock-block-img' src={pizza.imageUrl} alt="pizza"/>
                    <h3>{pizza.title}</h3>
                </div>
            </Link>
            <div className='pizzaBlock-filter'>
                <ul>
                    {
                        pizza.types.map((typeId) => (
                            <li key={typeId}
                                onClick={() => setActiveType(typeId)}
                                className={activeType === typeId ? 'active' : ''}>
                                {typeNames[typeId]}
                            </li>))
                    }
                </ul>
                <div className='pizzaBlock-filter-sizes'>
                    <ul>
                        {
                            pizza.sizes.map((val, i) =>
                                <li
                                    onClick={() => setActiveIndex(i)}
                                    className={activeIndex === i ? 'active' : ''}
                                    key={i}>{val} cm
                                </li>)
                        }
                    </ul>
                </div>
            </div>
            <div className='pizzaBlock-price'>
                <div>від: {pizza.price} ₴</div>
                <div className='pizzaBlock-price-button' onClick={onClickAdd}>
                    <BiPlus/>
                    <p>Добавити</p>
                    {addedCount > 0 && <span>{addedCount}</span>}
                </div>
            </div>
        </div>
    );
}
