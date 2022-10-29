import {FC, useState} from "react";
import './pizzaItems.scss'
import {Pizza} from "../../store/reducer/types";
import {BiPlus} from "@react-icons/all-files/bi/BiPlus";
import {useAppDispatch} from "../../hooks/redux";
import {setPizzasCounter} from "../../store/reducer/slice";

interface PizzaProps {
    pizza: Pizza
    pizzasCounter: number
}

export const PizzaItems: FC<PizzaProps> = ({pizza, pizzasCounter}) => {

    const [activeType, setActiveType] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const typeNames:string[] = ['тонка', 'традиційна'];

    const dispatch = useAppDispatch();

    const handleSubmit = (e: any) => {
        e.preventDefault()
        dispatch(setPizzasCounter(pizzasCounter + 1))
    }

    return (
        <div className='pizzaBlock'>
            <div className='pizzaBlock-block'>
                <img className='pizzaBlock-block-img' src={pizza.imageUrl} alt="pizza"/>
                <h3>{pizza.title}</h3>
            </div>
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
                <div>від: {pizza.price}</div>
                <button type='submit' onClick={handleSubmit}>
                    <BiPlus/>
                    <p>Добавити</p>
                    <span>
                        {
                            pizzasCounter
                        }
                    </span>
                </button>
            </div>
        </div>
    );
}