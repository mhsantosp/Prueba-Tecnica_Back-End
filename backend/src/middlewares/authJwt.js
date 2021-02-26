import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({ message: "Token ausente!!" });
    const decoded = jwt.verify(token, config.SECRET);
    const user = await User.findById(decoded.id, { password: 0 });
    console.log(user);
    if (!user) return res.status(404).json({ message: "Usuario no existe!!" });
    next();
  } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
  }
};

export const moderador = async (req, res, next) => {}

export const admin = async (req, res, next) => {}