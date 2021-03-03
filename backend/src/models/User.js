import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema(
  {
    names: {
      type: String,
      unique: true,
    },
    lastNames: {
      type: String,
      unique: true,
    },
    nameUser: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      unique: true,
    },
    imgPerfil: {
      type: String,
      unique: true,
    },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      }
    ]
  },
  {
    timestamps: true, //fecha de creación y actualización
    versionKey: false //para quitar el __v
  }
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
}

export default model('User', userSchema);