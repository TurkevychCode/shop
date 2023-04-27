import {FC} from "react";
import {HomeWindow} from "../homeWindow/HomeWindow";
import './navigation.scss'
import {Route, Routes} from "react-router";
import {PreBasket} from "../basket/PreBasket";
import FullPizzas from "../fullPizzas/FullPizzas";

export const Navigation: FC = () => {
    return (
        <div className='navi'>
            <Routes>
                <Route path='/' element={<HomeWindow/>}/>
                <Route path='/pizza/:id' element={<FullPizzas/>}/>
                <Route path='basket' element={<PreBasket/>}/>
            </Routes>
        </div>
    );
}
