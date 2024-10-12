import { Product } from "@prisma/client"
import db from "../libs/db"

export const createProduct = async (body: Product) => {
    const lastProduct = await db.product.findFirst({
        orderBy: { id: 'desc' }
    });

    if (!lastProduct) {
        return await db.product.create({
            data: {
                ...body,
                code: 'PROD-001',
                inventory: {
                    create: {
                        stock: 0,
                        totalUsage: 0
                    }
                }
            }
        });
    }

    const lastCode = lastProduct.code;
    const lastCodeNumber = parseInt(lastCode.replace('PROD-', '')) || 0;

    const newCodeNumber = lastCodeNumber + 1;

    const newCode = `PROD-${newCodeNumber.toString().padStart(3, '0')}`;

    const newProduct = await db.product.create({
        data: {
            ...body,
            code: newCode,
            inventory: {
                create: {
                    stock: 0,
                    totalUsage: 0
                }
            }
        }
    });

    return newProduct;
};

export const listProduct = async () => {
    return await db.product.findMany()
}

export const updateProduct = async (productId: string, body: Product) => {
    return await db.product.update({
        where: { id: productId },
        data: {
            ...body
        }
    })
}

export const deleteProduct = async (productId: string) => {
    return await db.product.delete({
        where: { id: productId }
    })
}