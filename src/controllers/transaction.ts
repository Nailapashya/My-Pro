import { Request, Response } from "express";
import * as transaction from "../services/transaction";

export const listTransactions = async (req: Request, res: Response) => {
    try {
        const data = await transaction.listTransactions();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const addTransaction = async (req: Request, res: Response) => {
    try {
        const { products } = req.body;

        if (!products || !Array.isArray(products)) {
            res.status(400).json({ message: "Code and products are required" });
        }

        const data = await transaction.addTransaction(products);
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
