import {FC} from "react";
import './basket.scss'
import {MdOutlineArrowBackIosNew} from "react-icons/md";
import {Link} from "react-router-dom";

export const Basket: FC = () => {
    return (

        <div className='root'>
            <div className='root-basket'>
                <div className='root-basket-title'>
                    <div className='root-basket-title-icon'></div>
                    <h1>Корзина</h1>
                </div>
                <div className='root-basket-trash'>
                    <div className='root-basket-trash-block'></div>
                    <span>Очистити корзину</span>
                </div>
                <div className='root-basket-borderBottom'></div>
            </div>
            <div className='root-contentBasket'>
                <h3>fdsfsd</h3>
                <h3>fdsfsd</h3>
                <h3>fdsfsd</h3>
                <h3>fdsfsd</h3>
            </div>
            <div className='root-bottomBasket'>
                <p>Всього піцц: 4 шт.</p>
                <p>Сума заказу: 1000грн</p>
            </div>
            <div className='root-buttonsBasket'>
                <Link to='/'>
                    <button className='root-buttonsBasket-back'>
                        <MdOutlineArrowBackIosNew/>
                        <p>Повернутись назад</p>
                    </button>
                </Link>
                <button className='root-buttonsBasket-payment'>Оплатити зараз</button>
            </div>
        </div>
    );
}