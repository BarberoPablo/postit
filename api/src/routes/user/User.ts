import { Schema, model } from "mongoose";
import { Product } from "../product/Product";

export interface IUser {
  name: String;
  email: String;
  password: String;
  purchases?: Array<Object>;
  favorites?: Array<String>; //Array of Product ids
  isAdmin?: Boolean;
}

const user = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    purchases: {
      type: Array<Object>,
    },
    favorites: {
      type: Array<String>, //Array of Product ids
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const User = model<IUser>("User", user);
