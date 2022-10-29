import {FC} from "react";
import {HomeWindow} from "../homeWindow/HomeWindow";
import './navigation.scss'
import {NotFoundBlock} from "../notFoundBlock/NotFoundBlock";
import {Route, Routes} from "react-router";
import {Basket} from "../basket/Basket";

export const Navigation: FC = () => {
    return (
        <div className='navi'>
            <Routes>
                <Route path='/' element={<HomeWindow/>}/>
                <Route path='/not-found' element={<NotFoundBlock/>}/>
                <Route path='basket' element={<Basket/>}/>
            </Routes>
        </div>
    );
}
