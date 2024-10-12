import { Router } from "express"
import * as product from "../controllers/product"
import * as inventory from "../controllers/inventory"


const productRouter = Router()

productRouter.post("/", product.createProduct)
productRouter.get("/", product.listProduct)
productRouter.put("/:productId", product.updateProduct)
productRouter.delete("/:productId", product.deleteProduct)

productRouter.get("/inventory", inventory.listInventory)


export default productRouter                                                                                