import './categories.scss'
import {FC, memo} from "react";

interface PizzaProps {
    categoryIndex: number
    onClickCategory: any
}
const category: string[] = [
    'Всі',
    'Мясні',
    'Вегетеріанська',
    'Гриль',
    'Гострі',
    'Закриті',
];

export const Categories: FC<PizzaProps> = memo( ({categoryIndex, onClickCategory}) => {




    return (
        <div className='categories'>
            <ul>
                {
                    category.map((categoryName, i) =>
                        <li
                            key={i}
                            onClick={() => onClickCategory(i)}
                            className={categoryIndex === i ? 'active' : ''}>
                            {categoryName}
                        </li>)
                }
            </ul>
        </div>
    );
})
