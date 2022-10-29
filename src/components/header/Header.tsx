import {FC} from "react";
import './header.scss'
import {AiOutlineShoppingCart} from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import {BsCurrencyEuro} from "react-icons/bs";
import {Link} from "react-router-dom";
import {Search} from "../search/Search";

interface PizzaProps {
    searchValue: string
}


export const Header: FC<PizzaProps> = ({searchValue}) => {
    return (
        <div className='header'>
            <Link to="/">
                <div className='header-container'>
                    <div className='header-container-logo'></div>
                    <div className='header-container-title'>
                        <h1>Pizza shop</h1>
                        <p>найкраща піцца у світі</p>
                    </div>
                </div>
            </Link>
            <Search searchValue={searchValue}/>
            <Link to="/not-found">
                <div className='header-button'>
                    <div className='header-button-price'>
                        <div>10</div>
                        <BsCurrencyEuro/>
                    </div>
                    <button>
                        <AiOutlineShoppingCart size={20}/>
                        <h3>1</h3>
                    </button>
                </div>
            </Link>
        </div>
    );
}
