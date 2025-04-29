"use client"

import { useStore } from "@/src/store"

export default function ProductSearchForm() {

    const { setSearchTerm  } = useStore();
    const handleSearchForm = ( formData : FormData ) => { 

        const term = formData.get('search')?.toString().toLowerCase() || ''

        setSearchTerm(term)
        
    }

    return (
        <form
            action={handleSearchForm}
            className=" flex items-center"
        >

            <input 
                type="text" 
                placeholder="Buscar Producto"
                className="p-2 placeholder-gray-400 w-full bg-white"
                name="search"
            />

            <input
                type="submit"
                className="bg-blue-600 hover:bg-blue-800 p-2 uppercase text-white cursor-pointer "
                value={'Buscar Producto'}
            />

        </form>
    )
}
