import { RequestHandler } from "express";
import { Error } from "mongoose";
import { Product } from "./Product";

export const getAllProducts: RequestHandler = async (req, res) => {
  const products = await Product.find();
  res.status(200).send(products);
};

export const getProduct: RequestHandler = async (req, res) => {
  console.log(req.params.id);

  const productId = req.params.id;
  const product = await Product.find({ _id: productId });

  if (product) {
    return res.status(200).json(product);
  }
  return res.status(400).send(`Could not find product with id: ${productId}`);
};

export const createProduct: RequestHandler = async (req, res) => {
  try {
    const { name, price, type, images, description } = req.body;

    if (!name || !price || !type || !description) {
      return res
        .status(400)
        .send("Empty prop, check name, price, type, and description");
    }

    const product = new Product({
      name,
      price,
      type,
      images,
      description,
    });

    const newProduct = await product.save();

    return res.status(201).send(newProduct);
  } catch (error: any) {
    if (error instanceof Error.ValidationError) {
      const errors: string = Object.keys(error.errors).join(", ");
      return res.status(400).json(`Validation failed at ${errors}`);
    }
    if (error.code === 11000) {
      return res
        .status(400)
        .json(`Duplicated key: ${Object.keys(error.keyValue)}`);
    }
    return res.json(error);
  }
};
