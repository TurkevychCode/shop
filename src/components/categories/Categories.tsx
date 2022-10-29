import './categories.scss'
import {FC} from "react";
interface PizzaProps {
    categoryIndex: number
    onClickCategory: any
}

export const Categories: FC<PizzaProps> = ({categoryIndex,onClickCategory}) => {
    const category:string[] = [
        'Всі',
        'Мясні',
        'Вегетеріанська',
        'Гриль',
        'Гострі',
        'Закриті',
    ];

    return (
        <div className='categories'>
            <ul>
                {
                    category.map((categoryName,i) =>
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
}
