import * as product from "../services/product"
import { Request, Response } from "express"

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const data = await product.createProduct(body);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error, message: "internal server error" });
    }
}

export const listProduct = async (req: Request, res: Response) => {
    try {
        const data = await product.listProduct();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params
        const { body } = req
        const data = await product.updateProduct(productId, body);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params
        const data = await product.deleteProduct(productId);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}