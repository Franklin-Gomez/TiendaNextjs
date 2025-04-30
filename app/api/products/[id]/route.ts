import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'


export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const  { id } = await params;

        await prisma.products.delete({
            where: { id },
        })

        return NextResponse.json({ message: 'Producto eliminado' }, { status: 200 })

    } catch (error) {

        console.error('Error al eliminar producto:', error)
        return NextResponse.json({ error: 'No se pudo eliminar el producto' }, { status: 500 })
    }
}
