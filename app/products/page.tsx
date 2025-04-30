import React from 'react'
import ProductTablet from '../components/products/ProductTablet'
import ProductSearchForm from '../components/products/ProductSearchForm'
import Link from 'next/link'
    
export default async function page() {

    return (
        <div>

            <h1 className='text-4xl text-center font-bold uppercase mb-3'> PC Master Race Productos </h1>

            <div className="flex flex-col lg:flex-row lg:justify-between gap-5">

                <Link
                    href={'/products/new'}
                    className='bg-amber-300 hover:bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer'
                > Crear Producto </Link>

                <ProductSearchForm/>

            </div>

            <ProductTablet/>

        </div>
    )
}
