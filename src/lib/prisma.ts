import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient({ log: ['query'] })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// ¿Ya hay un prisma creado en global?
// Sí → Usar el que existe
// No → Crear uno nuevo
// solo en desarrollo