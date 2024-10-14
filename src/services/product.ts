import { Product } from "@prisma/client"
import db from "../libs/db"

export const createProduct = async (body: Product) => {

    let codeNow = Date.now().toString()
    const newProduct = await db.product.create({

        data: {
            ...body,
            code: `PROD-${codeNow.slice(codeNow.length - 5)}`,
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