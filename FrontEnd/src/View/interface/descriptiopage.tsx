import { ReactNode } from "react"
    
export interface Information {
    title_page: string;
    text_page: string;
}


interface ItemBestFood {

    name_food: string,
    number_price: number
    image_food: ReactNode,
    description_item: string,
}

const bestFood: ItemBestFood[] = [
    {name_food: 'Test', description_item: 'Mice', image_food: '', number_price: 25}
]

{bestFood.map((bestFood) => (
    <h1>{bestFood.name_food}</h1>
))}

