import { RequestHandler } from "express";
import { User, IUser } from "./User";
import { configuration } from "../configuration/configuration";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let refreshTokens: any = []; //poner esto en la db

const authenticateUser = async (email: string, password: string) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw {
        status: 400,
        message: "Wrong email or password",
      };
    }

    if (await bcrypt.compare(password, user.password)) {
      return user.toJSON();
    } else {
      throw {
        status: 400,
        message: "Wrong email or password",
      };
    }
  } catch (error: any) {
    throw {
      status: error.status || 500,
      message: error.message,
    };
  }
};

const generateToken = (user: any) => {
  return {
    accessToken: jwt.sign(user, configuration.jwt.accessToken.token, {
      expiresIn: configuration.jwt.accessToken.expiresIn,
    }),
    refreshToken: jwt.sign(user, configuration.jwt.refreshToken.token),
  };
};

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

export const login: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authenticateUser(email, password);
    const token = generateToken(user);

    refreshTokens.push(token.refreshToken);
    res.json(token); //lo que hace esto es crear en el header un objeto accessToken
  } catch (error: any) {
    res.status(error.status || 500).send(error.message);
  }
};
