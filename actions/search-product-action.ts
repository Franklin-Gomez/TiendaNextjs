
import { prisma } from "@/src/lib/prisma"
import { SearchSchema } from "@/src/schema"

export async function searchProduct ( data : string ) { 

    const result = SearchSchema.safeParse( data )

    if(!result.success) { 
        return {
            errors : result.error.issues
        }
    }

    await prisma.products.findMany({
        where : { name : data }
    })
    
}