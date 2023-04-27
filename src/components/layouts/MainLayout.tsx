import {Header} from "../header/Header";
import {Outlet} from "react-router";

export default function MainLayout() {
    return (
        <div>
            <Header searchValue={''}/>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}
