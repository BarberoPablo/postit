import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    reviews: [
      {
        profilePicture: String, // URL
        name: String,
        score: Number,
        title: String,
        comment: String,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Product = model("Product", productSchema);
