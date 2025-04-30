import { create } from 'zustand'

type Product = {
    id: string
    code : number
    name: string
    description : string
    quantity: number
    createdAt: Date
}

type SortKey = 'code' | 'name'  | 'quantity' | 'createdAt'
type SortOrder = 'asc' | 'desc'

interface Store { 
    products : Product[]
    setProducts: (products: Product[]) => void
    removeItem : ( id : Product['id']) => void
    searchTerm: string
    setSearchTerm: (term: string) => void
    sortKey: SortKey
    sortOrder: SortOrder
    setSort: (key: SortKey) => void
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

    searchTerm: '',

    setSearchTerm: (term) => set(
        { searchTerm: term }
    ),
    
    sortKey: 'createdAt', // valor por default
    
    sortOrder: 'asc', // valor por default
    
    setSort: (key) => { // parametro es la columna ardenar
        const { sortKey, sortOrder } = get() // recogemos los valores actuales
        set({
            sortKey: key, // actualiza a columna que vamos a ordenar
            sortOrder: sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc', // permitir el cambio de orden al hacer doble click
            
        })

    },
}))