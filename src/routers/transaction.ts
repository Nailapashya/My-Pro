import { Router } from "express"
import * as transaction from "../controllers/transaction"

const transactionRouter = Router()

transactionRouter.get("/", transaction.listTransactions)
transactionRouter.post("/", transaction.addTransaction)


export default transactionRouter    