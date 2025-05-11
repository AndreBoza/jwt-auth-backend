import db from "../models/index.js";

const ROLES = ["user", "admin", "moderator"];
const User = db.user;
const Role = db.role;

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const user = await User.findOne({ where: { username: req.body.username } });
  if (user) {
    return res.status(400).send({ message: "❌ El nombre de usuario ya está en uso." });
  }

  const email = await User.findOne({ where: { email: req.body.email } });
  if (email) {
    return res.status(400).send({ message: "❌ El correo ya está en uso." });
  }

  next();
};

const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let role of req.body.roles) {
      if (!ROLES.includes(role)) {
        return res.status(400).send({
          message: `❌ Rol no válido: ${role}`
        });
      }
    }
  }
  next();
};

export const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};
