import { RequestHandler } from "express";
import { User, userInterface } from "./User";
const bcrypt = require("bcrypt");

export const getAllUsers: RequestHandler = async (req, res) => {
  const projection = { password: 0, isAdmin: 0 }; //0 to exclude, 1 to inlclude
  const users = await User.find({}, projection);
  res.status(200).json(users);
};

//{ _id: 1} only prop _id | { _id: 1, name: 0} all props exclude name and include id === {name: 0};
export const getUser: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const projection = { password: 0, isAdmin: 0 };
    const user = await User.find({ _id: id }, projection);
    console.log("@@@", user);
    if (user) {
      return res.status(200).json(user); // NO DEVOLVER LA PASSWORD
    }
    res.status(400).send("User doesn't exists");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const createUser: RequestHandler = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    const newUser = await user.save();

    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
