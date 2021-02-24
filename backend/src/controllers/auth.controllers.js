import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";

export const signUp = async (req, res) => {
  const { email, password } = req.body;

  const newUser = new User({
    email,
    password: await User.encryptPassword(password),
  });

  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400,
  });

  console.log("token", token);
  res.json({token});
};

export const signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email})
                      // .populate("roles");
  if (!userFound) return res.status(400).json({message: "Usuario no existe"});
  console.log(userFound);

  const matchcPassword = await User.comparePassword(req.body.password, userFound.password);
  if (!matchcPassword) return res.status(401).json({token: null, message: "Contraseña invalida"});
  console.log(matchcPassword);

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400,
  });

  console.log("token", token);
  res.json({token});
};
