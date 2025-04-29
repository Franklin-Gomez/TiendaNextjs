import { z } from 'zod'

// searchForm
export const SearchSchema = z.object({
    search : z.string()
                .trim()
                .min(1 , { message : 'La Busqueda no puede ir vacia '})
})

//ProductForm
export const ProductSchema = z.object({

    code : z.number()
        .int()
        .positive()
        .or(z.number().min(1, {message: 'El codigo es Obligatorio' }))
    ,
    name: z.string()
        .trim()
        .min(1, { message: 'El Nombre del Producto no puede ir vacio'}),

    description : z.string()
        .trim()
        .min(1, { message: 'La descripcion no puede ir vacio'})
    ,
    quantity: z.number()
        .int()
        .positive()
        .refine((value) => value > 0, { message: 'Cantidad no valido ' })
        .or(z.number().min(1, {message: 'La Categoría es Obligatoria' }))
})