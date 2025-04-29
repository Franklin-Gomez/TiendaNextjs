import ProductCreateForm from '@/app/components/products/ProductCreateForm'
import Link from 'next/link'
import React from 'react'

export default function crearProduct() {
    return (
        <div>

            <div className="flex flex-col lg:justify-between gap-5">

                <Link
                    href={'/products'}
                    className='bg-amber-300 w-full lg:w-1/4 text-xl px-10 py-3 text-center font-bold cursor-pointer hover:bg-amber-400'
                > Inicio </Link>
                
                <h1 className='text-3xl text-center font-bold'>Crear Producto</h1>

                <ProductCreateForm/>

            </div>
           
        </div>
    )
}
