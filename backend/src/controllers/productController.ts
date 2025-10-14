import { Request, Response } from "express";
import { productService } from "../services/productService";

export const productController = {
  async getAll(req: Request, res: Response) {
    const products = await productService.getAll();
    res.json(products);
  },

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const product = await productService.getById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  },

  async create(req: Request, res: Response) {
    const newProduct = await productService.create(req.body);
    res.status(201).json(newProduct);
  },

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const updated = await productService.update(id, req.body);
    res.json(updated);
  },

  async remove(req: Request, res: Response) {
    const id = Number(req.params.id);
    await productService.remove(id);
    res.status(204).send();
  },
};
