import { Schema, model } from "mongoose";

export const ROLES = ["user", "admin", "moderador"];

//Modelo de datos de los usuarios para el Rol del usuario
const roleSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false, //para quitar el __v
  }
);

export default model("Role", roleSchema);