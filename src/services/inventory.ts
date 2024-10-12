import db from "../libs/db"

// export const addProductToInventory = async (productId: string, stock: number) => {
//     const existingProduct = await db.product.findUnique({
//       where: { id: productId },
//     });
  
//     if (!existingProduct) {
//       throw new Error("Product not found");
//     }
  
//     const inventory = await db.inventory.create({
//       data: {
//         productId: existingProduct.id,  
//         stock,                           
//       },
//     });
  
//     return inventory;
//   };

export const listInventory = async() => {
    return await db.inventory.findMany()
}

export const addStock = async (productId: string, stock: number) => {
    const exitingInventory = await db.inventory.findFirst({
        where: {productId}
    })

    if(!exitingInventory) {
        console.error(`Inventory not found for productId: ${productId}`);
        throw new Error("Product not found")
    }

    return await db.inventory.update({
        where: {productId},
        data: {
            stock: exitingInventory.stock + stock
        }
    })
}