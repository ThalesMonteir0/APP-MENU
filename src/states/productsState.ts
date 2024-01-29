export type Product = {
    title: string
    description: string
    src: string
    price:number
}

export interface ProductCart extends Product {
    amount: number
    totalValue: number
}