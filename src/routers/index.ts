import { Router } from "express";
import productRouter from "./product"
import transactionRouter from "./transaction"
import inventoryRouter from "./inventory"

const indexRouter = Router();

indexRouter.use("/product", productRouter);
indexRouter.use("/transaction", transactionRouter);
indexRouter.use("/inventory", inventoryRouter);

export default indexRouter;