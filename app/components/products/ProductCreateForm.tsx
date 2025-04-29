"use client"

import { createProduct } from "@/actions/create-product-action"
import { ProductSchema } from "@/src/schema"
import { useRouter } from "next/navigation"
import { toast} from "react-toastify"

export default function ProductCreateForm() {

    const router = useRouter()

    const handleCreateForm = async ( formData : FormData ) => { 
        
        const data = {
            code : formData.get('code'),
            name : formData.get('name'),
            description : formData.get('description'),
            quantity : formData.get('quantity')            
        }

        // validacion del formulario por el cliente
        const result = ProductSchema.safeParse( data )

        if(!result.success){

            result.error.issues.forEach( issue => { 
                toast.error( issue.message )
            })

            return

        }

        // actions
        const response = await createProduct( result.data )

        // validacion del servidor
        if( response?.errors ) { 
            
            response.errors.forEach( issue => { 
                toast.error( issue.message )
            })

            return
        }
        // actualizamos el localStorage , cuando se crea un nuevo registro
        localStorage.setItem('products', JSON.stringify(result.data))

        toast.success('Producto Creado Correctamente')
        router.push('/products')
        
        
    }

    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md w-1/2 mx-auto">

            <form
                className="space-y-5"
                action={handleCreateForm}
            >

                <div className="space-y-2">
                    <label
                        className="text-slate-800"
                        htmlFor="code"
                    >Codigo:</label>
                    <input
                        id="code"
                        type="number"
                        name="code"
                        className="block w-full p-3 bg-slate-100"
                        placeholder="Codigo del Producto"
                    />
                </div>

                <div className="space-y-2">
                    <label
                        className="text-slate-800"
                        htmlFor="name"
                    >Nombre:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="block w-full p-3 bg-slate-100"
                        placeholder="Nombre Producto"
                    />
                </div>                
                
                <div className="space-y-2">
                    <label
                        className="text-slate-800"
                        htmlFor="description"
                    >Descripcion:</label>
                    <input
                        id="description"
                        type="text"
                        name="description"
                        className="block w-full p-3 bg-slate-100"
                        placeholder="Descripcion del Producto"
                    />
                </div>

                <div className="space-y-2">
                    <label
                        className="text-slate-800"
                        htmlFor="quantity"
                    >Cantidad:</label>
                    <input
                        id="quantity"
                        name="quantity"
                        className="block w-full p-3 bg-slate-100"
                        placeholder="Cantidad de Productos"
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    value='Crear Producto'
                />

            </form>

        </div>
    )
}
