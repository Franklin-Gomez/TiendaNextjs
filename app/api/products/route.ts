import { prisma } from "@/src/lib/prisma"
import { NextResponse } from "next/server"

// R -> nos Traemos los elementos, desde componente de servidor
export async function GET() {
  const products = await prisma.products.findMany()
  return NextResponse.json(products)
}
