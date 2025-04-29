"use client"

import { getAllProduct } from "@/actions/getAll-product-action"
import { formatDate } from "@/src/helpers"
import { useStore } from "@/src/store"
import { useEffect } from "react"
import { deleteProduct } from "@/actions/delete-product-action"

export default function ProductTablet() {
    const { products , removeItem , setProducts, searchTerm  } = useStore()
    
    useEffect(() => { 
        const localData = localStorage.getItem('products')

        const parsed = localData ? JSON.parse(localData) : []

        if (parsed.length > 0  ) {

            setProducts(JSON.parse(localData!))

        } else {

            getAllProduct()

            setProducts(products)
            
        }
    } ,[])

    const handleDeleteProduct = ( id : string ) =>  { 

        // borramos de la base de datos
        deleteProduct( id )

        // eliminamos del state
        removeItem(id)

    }

    // filtramos por nombre
    const ProductosFiltrados = products.filter(productos =>
        productos.name.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div>
            <h1 className="text-center font-bold text-3xl my-4"> Productos </h1>
          
            <div className="overflow-x-auto">
                <table className="min-w-full text-center">
                    <thead className="border-b border-gray-300">
                        <tr> 
                            <th className="px-4 py-2">Codigo</th>
                            <th className="px-4 py-2">Nombre del sector</th>
                            <th className="px-4 py-2">Descripcion</th>
                            <th className="px-4 py-2">Cantidad</th>
                            <th className="px-4 py-2">Fecha Creacion</th>
                            <th className="px-4 py-2">Accion</th>
                        </tr>
                        
                    </thead>

                    <tbody>
                    {ProductosFiltrados.map((product) => (
                        <tr key={product.id} className="odd:bg-white even:bg-gray-100">
                            <td className="px-4 py-2">{product.code}</td>
                            <td className="px-4 py-2">{product.name}</td>
                            <td className="px-4 py-2">{product.description}</td>
                            <td className="px-4 py-2">{product.quantity}</td>
                            <td className="px-4 py-2">{formatDate(product.createdAt)}</td>
                            <td className="px-4 py-2">                    
                                <button
                                    type="button"
                                    onClick={() => handleDeleteProduct(product.id) }
                                    className="bg-red-400 px-4 py-2 text-white hover:bg-red-800 rounded-xl font-bold cursor-pointer"
                                >
                                   Eliminar
                                </button>
                            </td>
                            
                            
                        </tr>
                    ))} 
                    </tbody>
                </table>
            </div>
        </div>
    )
}
