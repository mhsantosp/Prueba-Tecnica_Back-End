import User from "../models/User";
import Role from "../models/Role";
import jwt from "jsonwebtoken";
import config from "../config";

//Registro Nuevos usuarios
export const signUp = async (req, res) => {
  const { names, lastNames, nameUser, email, password, imgPerfil, roles } = req.body;

  const newUser = new User({ names, lastNames, nameUser, email, password: await User.encryptPassword(password), imgPerfil });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
  }

  const savedUser = await newUser.save();
  // console.log(savedUser);
  const token = jwt.sign({ id: savedUser._id }, config.SECRET, { expiresIn: 86400 });
  // console.log("token", token);
  res.json({ token });
};

//Iniciar Sesión
export const signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate("roles");
  if (!userFound) return res.status(400).json({ message: "Usuario no existe" });
  // console.log(userFound);

  const matchcPassword = await User.comparePassword( req.body.password, userFound.password );
  if (!matchcPassword) return res.status(401).json({ token: null, message: "Contraseña invalida" });

  const token = jwt.sign({ id: userFound._id }, config.SECRET, { expiresIn: 86400 });

  // res.json({ token });
  res.json({ token, userFound });
};
