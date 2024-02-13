export type Product = {
    title: string
    description: string
    src: string
    price:number
}

export interface ProductCart {
    title: string
    quantity: number
    value: number
}