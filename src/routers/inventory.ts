import { Router } from "express"
import * as inventory from "../controllers/inventory"

const inventoryRouter = Router()

// inventoryRouter.post("/addProductToInventory", inventory.addProductToInventory)
inventoryRouter.get("/", inventory.listInventory)
inventoryRouter.post("/:productId", inventory.addStock)


export default inventoryRouter    