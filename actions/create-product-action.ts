"use server"

import { prisma } from "@/src/lib/prisma"
import { ProductSchema } from "@/src/schema"

type createProductType = { 
    code: number;
    name: string;
    description: string;
    quantity: number ;
}

export async function createProduct ( data : createProductType  ) { 

    const result = ProductSchema.safeParse( data )

    if(!result.success) { 
        return {
            errors : result.error.issues
        }
    }

    await prisma.products.create({
        data : result.data
    })
    
}