import { create } from 'zustand'

type Product = {
    id: string
    code : number
    name: string
    description : string
    quantity: number
    createdAt: Date
}

interface Store { 
    products : Product[]
    setProducts: (products: Product[]) => void
}

export const useStore = create<Store> ((set , get ) => ({

    products : [],

    setProducts: (products) => 
        set(
            { products }, 
            false, 
            //'setProducts'
        )
    ,

}))