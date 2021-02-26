import User from "../models/User";
import { ROLES } from "../models/Role";

export const existeUsuarioCorreo = async (req, res, next) => {
  try {
    const user = await User.findOne({ nameUser: req.body.nameUser });
    if (user) return res.status(400).json({ message: "El usuario ya existe!!" });

    const email = await User.findOne({ email: req.body.email });
    if (email) return res.status(400).json({ message: "Ese correo ya existe!!" });
    
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// export const existeRol = (req, res, next) => {
//   if (req.body.roles) {
//     for (let i = 0; i < req.body.roles.length; i++) {
//       if (!ROLES.includes(req.body.roles[i])) {
//         return res.status(400).json({
//           message: `Rol ${req.body.roles[i]} no esiste!!`,
//         });
//       }
//     }
//   }

//   next();
// };