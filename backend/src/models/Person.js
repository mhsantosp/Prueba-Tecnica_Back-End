import { Schema, model } from 'mongoose';

const personSchema = new Schema(
  {
    imgPerfil: String,
    names: String,
    lastNames: String,
    email: String,
    nameUser: String,
    password: String
  },
  {
    timestamps: true, //fecha de creación y actualización
    versionKey: false //para quitar el __v
  }
)

export default model('Persons', personSchema);