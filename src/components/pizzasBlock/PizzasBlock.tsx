import {FC} from "react";
import {Pizza} from "../../store/reducer/types";
import {PizzaItems} from "../pizzaItem/PizzaItems";
import './pizzasBlock.scss'
import PizzaSkeleton from "../skeleton/Skeleton";

interface PizzaProps {
    pizzas: Pizza[]
    searchValue: string
    status: string
}

export const PizzasBlock: FC<PizzaProps> = ({pizzas, searchValue, status}) => {
    const pizzaSlice = pizzas.slice(0, 10)

    const pizzasValue = pizzaSlice
        .filter((obj) => {
            return obj.title.toLowerCase().includes(searchValue.toLowerCase());

        })
        .map((pizza) =>
                <PizzaItems pizza={pizza} key={pizza.id}/>
           )

    const skeletons = [...new Array(8)].map((_, index) => <PizzaSkeleton key={index}/>)
    return (

        <div>
            {
                status === 'Error' ? <div className='error'>
                    <div className='error-errorWindow'>
                        <h2>Сталась помилка 😕</h2>
                        <p>На жаль, не вдалось получити піцци. Спробуйте повторити пізніше.</p>
                    </div>
                </div> : <div className='pizzasBlock'>
                    {
                        status === 'loading'
                            ? skeletons
                            : pizzasValue
                    }
                </div>
            }
        </div>

    );
}
