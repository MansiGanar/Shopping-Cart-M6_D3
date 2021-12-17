import express from "express";
import { Product } from "../db/models/index.js";
const productRouter = express.Router();

productRouter.get("/", async (req, res, next) => {});

productRouter.post("/", async (req, res, next) => {});

productRouter.get("/:productId", async (req, res, next) => {});

productRouter.put("/:productId", async (req, res, next) => {});

productRouter.delete("/:productId", async (req, res, next) => {});

export default productRouter;
