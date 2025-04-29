"use client"

import { useStore } from "@/src/store"

export async function getAllProduct() { 

    try {
        
        const res = await fetch('/api/products')
        const products = await res.json()
        
        localStorage.setItem('products', JSON.stringify(products))

        const { setProducts } = useStore.getState() 
    
        setProducts( products )
        
    } catch (error) {
        console.error('Error cargando productos:', error)
    }
    
    
}