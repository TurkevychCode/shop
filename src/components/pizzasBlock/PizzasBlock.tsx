import {FC} from "react";
import {Pizza} from "../../store/reducer/types";
import {PizzaItems} from "../pizzaItem/PizzaItems";
import './pizzasBlock.scss'
import PizzaSkeleton from "../skeleton/Skeleton";

interface PizzaProps {
    pizzas: Pizza[]
    pizzasCounter: number
    isLoading: boolean
    searchValue: string
}

export const PizzasBlock: FC<PizzaProps> = ({pizzas, pizzasCounter, isLoading, searchValue}) => {
    const pizzaSlice = pizzas.slice(0, 10)

    const pizzasValue = pizzaSlice
        .filter((obj) => {
        return obj.title.toLowerCase().includes(searchValue.toLowerCase());

    })
        .map(pizza => <PizzaItems pizza={pizza} key={pizza.id} pizzasCounter={pizzasCounter}/>)

    const skeletons = [...new Array(8)].map((_, index) => <PizzaSkeleton key={index}/>)
    return (
        <div className='pizzasBlock'>
            {
                isLoading
                    ? skeletons
                    : pizzasValue
            }
        </div>
    );
}
