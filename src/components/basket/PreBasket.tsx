import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Link} from "react-router-dom";
import {MdOutlineArrowBackIosNew} from "react-icons/md";
import {Basket} from "./Basket";
import {FC} from "react";
import {Header} from "../header/Header";
import {clearItems} from "../../store/reducer/slices/cartSlice";
import {NotFoundBlock} from "../notFoundBlock/NotFoundBlock";


export const PreBasket: FC = () => {
    const {items, totalPrice} = useAppSelector((state) => state.cartSlice)
    const dispatch = useAppDispatch()

    const onClickClear = () => {
        if (window.confirm('Очистити корзину?')) {
            dispatch(clearItems())
        }
    }

    const sum = items.reduce(function (accumulator: any, currentValue: { count: any; }) {
        return accumulator + currentValue.count
    }, 0)

    if (!totalPrice) {
        return <NotFoundBlock/>
    }


    return (

        <div className='allWindow'>
            <Header searchValue={""}/>
            <div className='position'>
                <div className='root'>
                    <div className='root-basket'>
                        <div className='root-basket-title'>
                            <div className='root-basket-title-icon'></div>
                            <h1>Корзина</h1>
                        </div>
                        <div className='root-basket-trash'>
                            <div className='root-basket-trash-block'></div>
                            <span onClick={onClickClear}>Очистити корзину</span>
                        </div>
                        <div className='root-basket-content'>
                            {
                                items.map((item: any) => <Basket key={item.id} {...item} />)
                            }
                        </div>
                    </div>
                    <div className='root-bottomBlock'>
                        <div className='root-bottomBlock-priceCount'>
                            <h2>Всього піцц: {sum} </h2>
                            <h2>Сума замовлення: {totalPrice} ₴</h2>
                        </div>

                        <div className='root-bottomBlock-buttonsBasket'>
                            <Link to='/'>
                                <div className='root-bottomBlock-buttonsBasket-back'>
                                    <MdOutlineArrowBackIosNew/>
                                    <p>Повернутись назад</p>
                                </div>
                            </Link>
                            <button className='root-bottomBlock-buttonsBasket-payment'>Оплатити зараз</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
