import dotenv from 'dotenv';
dotenv.config();

export default {
  HOST: "localhost",   // Cambiar esto
  USER: "root",
  PASSWORD: "",
  DB: "jwt_auth_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
