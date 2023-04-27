export interface Pizza{
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    sizes:number[],
    types:number[],
    rating:number,
    category: number
}

export interface PizzaBasket{
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    types:number[],
    count: number,
    size: number
}
