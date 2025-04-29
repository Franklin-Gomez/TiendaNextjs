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
    removeItem : ( id : Product['id']) => void
}

export const useStore = create<Store> ((set , get ) => ({

    products : [],

    setProducts: (products) => 

        set(
            { products }, 
            false, 
            //'setProducts',
        )
    ,

    removeItem : ( id ) =>{
        let item : Product[] = []
   
        // eliminar el elemento del state
        item = get().products.filter( item => item.id !== id )

        // eliminar elemento del localStorage
        localStorage.setItem('products', JSON.stringify(item))

        set(() => ({
            products : item
        }))
    },

}))