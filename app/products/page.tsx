
import React from 'react'
import ProductTablet from '../components/products/ProductTablet'
import ProductSearchForm from '../components/products/ProductSearchForm'

export default function page() {
    return (
        <div>

            <h1 className='text-4xl text-center font-bold uppercase mb-3'> PC Master Race Productos </h1>
            
            <ProductSearchForm/>
            <ProductTablet/>
        </div>
    )
}
