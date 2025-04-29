"use client"

export async function deleteProduct( id : string ) { 

    try {
        
        const res = await fetch(`/api/products/${id}` , {
            method : 'DELETE'
        })

        const products = await res.json()

        return products
        
    } catch (error) {
        console.error('Error cargando productos:', error)
    }
    
    
}