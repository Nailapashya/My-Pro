import db from "../libs/db"

export const listTransactions = async() => {
    return db.transaction.findMany()
}

export const addTransaction = async (code: string, products: { productId: string, quantity: number }[], discount?: number) => {
    let totalProduct = 0;
    let grandTotal = 0;

    if (!Array.isArray(products)) {
        throw new Error("Products must be an array");
    }
    

    for (const productItem of products) {
        const product = await db.product.findUnique({
            where: { id: productItem.productId }
        });

        if (!productItem.productId) {
            throw new Error("Product ID is missing");
        }        

        if (!product) {
            throw new Error(`Product with ID ${productItem.productId} not found`);
        }

        totalProduct += productItem.quantity;
        grandTotal += product.price * productItem.quantity;

        if (typeof product.price !== 'number') {
            throw new Error(`Invalid price for product with ID ${productItem.productId}`);
        }
        
    }

    if (discount) {
        grandTotal = grandTotal - (grandTotal * (discount / 100));
    }

    const transaction = await db.transaction.create({
        data: {
            code,
            totalProduct,
            discount: discount || 0,
            grandTotal,
            transactionProducts: {
                create: products.map(productItem => ({
                    productId: productItem.productId,
                    quantity: productItem.quantity
                }))
            }
        }
    });

    return transaction;
}
