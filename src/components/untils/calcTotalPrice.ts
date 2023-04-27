import {Pizza} from "../../store/reducer/types";

export const calcTotalPrice = (items: Pizza[])=>{
    return items.reduce((sum, obj:any) => obj.price * obj.count + sum, 0)
}
