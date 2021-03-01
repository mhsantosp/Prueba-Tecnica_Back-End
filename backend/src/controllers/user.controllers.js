import User from "../models/User";

export const createUser= async (req, res) => {
  res.json('Usuario creado');
  // //datos que se extraen del body
  // const { names, lastNames, email, nameUser, password } = req.body
  // const newUser = new User({names, lastNames, email, nameUser, password});
  // const userSaved = await newUser.save();
  // res.status(201).json(userSaved);
}

export const getUsers = async (req, res) => {
  const user = await User.find();
  res.json(user);
}

export const getUserById = async (req, res) => {
  const user = await User.findOne(req.params.userId);
  res.status(200).json(user);
}

export const updateUserById = async (req, res) => {
  const upUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
  res.status(200).json(upUser);
}

export const deleteUserById = async (req, res) => {
  const {userId} = req.params;
  await User.findByIdAndDelete(userId);
  res.json('Usuario eliminado correctamente!!');
}