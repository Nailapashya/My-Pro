import { Request, Response } from "express";
import * as inventory from "../services/inventory";

// export const addProductToInventory = async (req: Request, res: Response) => {
//     try {
//       const { productId } = req.params;
//       const { stock } = req.body;

//       if (!productId || !stock) {
//         res.status(400).json({ message: "Product ID and stock are required" });
//       }

//       const data = await inventory.addProductToInventory(productId, stock);
//        res.status(201).json(data);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Internal Server Error" });
//     }
//   };

export const listInventory = async (req: Request, res: Response) => {
    try {
        const data = await inventory.listInventory();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const addStock = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId
        const { stock } = req.body;

        if (!productId || !stock) {
            res.status(400).json({ message: "Product ID and additional stock are required" });
        }

        const data = await inventory.addStock(productId, stock);
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
