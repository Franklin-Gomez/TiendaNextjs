"use client"

export default function ProductSearchForm() {

    const handleSearchForm = ( formData : FormData ) => { 
        console.log("desde handle search Form")
        
    }

    return (
        <form
            action={handleSearchForm}
            className=" flex items-center"
        >

            <input 
                type="text" 
                placeholder="Buscar Producto"
                className="p-2 placeholder-gray-400 w-full"
                name="search"
            />

            <input
                type="submit"
                className="bg-blue-600 p-2 uppercase text-white cursor-pointer"
                value={'Buscar Producto'}
            />

        </form>
    )
}
