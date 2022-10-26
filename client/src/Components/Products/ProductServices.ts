/* import dotenv from "dotenv";
dotenv.config();

const api = {
  url: process.env.CLIENT_URL || "http://localhost:3001",
}; */

export const getProducts = async () => {
  return await fetch("http://localhost:3001/products").then((response) =>
    response.json()
  );
};
