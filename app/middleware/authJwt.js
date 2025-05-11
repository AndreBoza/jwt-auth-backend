import jwt from "jsonwebtoken";
import db from "../models/index.js";

const User = db.user;

const secret = "jwt-secret-key"; 

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "❌ No se proporcionó token." });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "❌ Token no válido." });
    }

    req.userId = decoded.id;
    next();
  });
};

const isAdmin = async (req, res, next) => {
  const user = await User.findByPk(req.userId);
  const roles = await user.getRoles();

  for (let role of roles) {
    if (role.name === "admin") {
      return next();
    }
  }

  return res.status(403).send({ message: "🔒 Se requiere rol de ADMINISTRADOR." });
};

const isModerator = async (req, res, next) => {
  const user = await User.findByPk(req.userId);
  const roles = await user.getRoles();

  for (let role of roles) {
    if (role.name === "moderator") {
      return next();
    }
  }

  return res.status(403).send({ message: "🔒 Se requiere rol de MODERADOR." });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator
};

export default authJwt;
