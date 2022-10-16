import { RequestHandler } from "express";

export const allProducts: RequestHandler = (req, res) => {
  res.status(200).send("All products");
};
