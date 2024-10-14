import db from "../libs/db"

export const listInventory = async() => {
    return await db.inventory.findMany({
        include: {
            product: {
                select: {
                    name: true
                }
            }
        }
    })

}

export const addStock = async (productId: string, stock: number, usage: number) => {
    const exitingInventory = await db.inventory.findFirst({
        where: {productId}
    })

    if(!exitingInventory) {
        console.error(`Inventory not found for productId: ${productId}`);
        throw new Error("Product not found")
    }

    return await db.inventory.update({
        where: { productId },
        data: {
            stock: (exitingInventory.stock + stock) - usage,
            totalUsage: usage,
        },
        include: {
            product: {
                select: {
                    name: true
                }
            }
        }
    })
}