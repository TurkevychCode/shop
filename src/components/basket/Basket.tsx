import {FC} from "react";
import './Prebasket.scss';
import {useAppDispatch} from "../../hooks/redux";
import {addItems, minusItem, removeItems} from "../../store/reducer/slices/cartSlice";
import {PizzaBasket} from "../../store/reducer/types";


export const Basket: FC<PizzaBasket> =
    ({id, price, title, types, imageUrl, count, size}) => {

        const dispatch = useAppDispatch();

        const onClickPlus = () => {
            dispatch(addItems({
                id
            }))
        }
        const onClickMinus = () => {

            dispatch(minusItem(
                id
            ))
        }
        const onClickRemove = () => {
            if (window.confirm('Ви точно хочете видалити цю піццу?')) {
                dispatch(removeItems(id))
            }
        }

        return (
            <>
                <div className='root-basket-borderBottom'></div>
                <div className='root-basket-content-pizzaContent'>
                    <div className='root-basket-content-pizzaContent-blockContent'>
                        <div className='root-basket-content-pizzaContent-blockContent-basketBlock'>
                            <div className='root-basket-content-pizzaContent-blockContent-basketBlock-img'>
                                <img src={imageUrl} alt="img"/>
                            </div>
                            <div className='root-basket-content-pizzaContent-blockContent-basketBlock-type'>
                                <h3>{title}</h3>
                                <p>{types}, {size}cm</p>
                            </div>
                        </div>
                        <div className='root-basket-content-pizzaContent-blockContent-blockCount'>
                            <div className='root-basket-content-pizzaContent-blockContent-blockCount-count'>
                                <button disabled={count === 1}
                                        className='root-basket-content-pizzaContent-blockContent-blockCount-count-minPlus'
                                        onClick={onClickMinus}>-
                                </button>
                                <p>{count}</p>
                                <button
                                    className='root-basket-content-pizzaContent-blockContent-blockCount-count-minPlus'
                                    onClick={onClickPlus}>+
                                </button>
                            </div>
                            <h4>{price * count} ₴</h4>
                            <div onClick={onClickRemove}
                                 className='root-basket-content-pizzaContent-blockContent-blockCount-buttonClear'>X
                            </div>
                        </div>
                    </div>
                </div>

            </>

        );
    }
