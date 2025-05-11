import dotenv from 'dotenv';
dotenv.config();

export default {
  HOST: process.env.DB_HOST,        // Esto será localhost
  USER: process.env.DB_USER,        // Esto será 'root' (por defecto en XAMPP)
  PASSWORD: process.env.DB_PASSWORD, // Si tienes una contraseña, ponla aquí, si no, deja vacío
  DB: process.env.DB_NAME,          // Aquí el nombre de tu base de datos
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
