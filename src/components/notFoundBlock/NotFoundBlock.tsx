import {FC} from "react";
import './notFoundBlock.scss'
import {Link} from "react-router-dom";
import {Header} from "../header/Header";

export const NotFoundBlock: FC = () => {
    return (
        <div className='notBlock'>
            <Header searchValue=''/>
            <div className='notFound'>
                <h1>Корзина пуста 😕</h1>
                <p>Найімовірніше, ви не замовляли ще піцу.
                    <br/>
                    Щоб замовити піцу, перейдіть на головну сторінку.</p>
                <div className='notFound-basket'>
                    <div className='notFound-basket-img'></div>
                </div>
                <div className='notFound-button'>
                    <Link to="/">
                        <button>Повернутись назад</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
