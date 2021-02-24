import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';

export const signUp = async (req, res) => {
  const { email, password } = req.body;

  const newUser = new User({
    email,
    password: await User.encryptPassword(password)
  });
  const savedUser = await newUser.save();
  const token = jwt.sign(
    {id: savedUser._id},
    config.SECRET,
    {expiresIn: 86400}
  );
  // console.log('token', token);
  res.json({token});
}


export const signIn = async (req, res) => {
  res.json('Sign In');
}