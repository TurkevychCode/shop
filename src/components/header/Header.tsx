import {FC, useEffect, useRef} from "react";
import './header.scss'
import {AiOutlineShoppingCart} from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import {Link, useLocation} from "react-router-dom";
import {Search} from "../search/Search";
import {useAppSelector} from "../../hooks/redux";

interface PizzaProps {
    searchValue: string
}


export const Header: FC<PizzaProps> = ({searchValue}) => {
    const {items, totalPrice} = useAppSelector((state) => state.cartSlice)

    const isMounted = useRef(false)
    const location = useLocation()

    useEffect(()=> {
        if (isMounted.current) {
            const json = JSON.stringify(items)
            localStorage.setItem('cart', json)
        }
        isMounted.current = true
        }, [items])

    const totalCount = items.reduce((sum: any, item:any) => sum + item.count, 0)

    return (
        <div className='header'>
            <Link to="/">
                <div className='header-container'>
                    <div className='header-container-logo'></div>
                    <div className='header-container-title'>
                        <h1>Pizza shop</h1>
                        <p>найкраща піца у світі</p>
                    </div>
                </div>
            </Link>
            {location.pathname !== '/basket' && <Search searchValue={searchValue}/>}
            <div className='header-button'>
            {location.pathname !== '/basket' && (
                <Link to="/basket">

                        <div className='header-button-price'>
                            <div>
                                <div>{totalPrice}  ₴</div>

                            </div>
                            <div className='header-button-price-line'></div>
                            <div className='header-button-price-button'>
                                <AiOutlineShoppingCart size={20}/>
                                <p>{totalCount} </p>
                            </div>
                        </div>

                </Link>
            )}
            </div>
        </div>
    );
}
