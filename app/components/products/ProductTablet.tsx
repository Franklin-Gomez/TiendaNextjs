"use client"

import { getAllProduct } from "@/actions/getAll-product-action"
import { formatDate } from "@/src/helpers"
import { useStore } from "@/src/store"
import { useEffect } from "react"

export default function ProductTablet() {

    const { products  } = useStore()
    
    useEffect(() => { 
        getAllProduct()
    } ,[])
    

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
                    {products.map((product) => (
                        <tr key={product.id} className="odd:bg-white even:bg-gray-100">
                            <td className="px-4 py-2">{product.code}</td>
                            <td className="px-4 py-2">{product.name}</td>
                            <td className="px-4 py-2">{product.description}</td>
                            <td className="px-4 py-2">{product.quantity}</td>
                            <td className="px-4 py-2">{formatDate(product.createdAt)}</td>
                            <td className="px-4 py-2"></td>
                            
                            
                        </tr>
                    ))} 

                        {/* <tr className="odd:bg-white even:bg-gray-100">
                            <td className="px-4 py-2">123213</td>
                            <td className="px-4 py-2">procesador</td>
                            <td className="px-4 py-2">cerebro del pc </td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">30/04/2025</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
