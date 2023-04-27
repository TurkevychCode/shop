import {useAppParams} from "../../hooks/redux";
import {useEffect, useState} from "react";
import axios from "axios";
import {Header} from "../header/Header";
import './fullizzas.scss'

export default function FullPizzas() {
    const [pizza, setPizza] = useState<any>('')
    const {id} = useAppParams()

    useEffect(() => {
        async function fetchPizza() {
            try {
                const {data} = await axios.get('https://63529bfaa9f3f34c3743f4a5.mockapi.io/items/' + id)
                setPizza(data)
            } catch (e) {
                console.log(e, 'error')
            }
        }

        fetchPizza()
    }, [])
    if (!pizza) {
        return <>{'Загрузка...'}</>
    }

    return (
        <div className='fullPizzas'>
            <Header searchValue={''}/>
            <div className='container'>
                <img src={pizza.imageUrl} alt="img"/>
                <h1>{pizza.title}</h1>
                <h4>Ціна: {pizza.price}₴</h4>
            </div>
        </div>
    );
}
