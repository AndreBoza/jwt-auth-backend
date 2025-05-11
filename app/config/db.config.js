import dotenv from 'dotenv';
dotenv.config();

export default {
  HOST: process.env.DB_HOST,   // Usamos las variables de entorno del .env
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || 'mysql',  // Si no se especifica el dialecto, usa mysql por defecto
  port: process.env.DB_PORT || 3306,  // Puerto por defecto 3306, pero puedes configurarlo en el .env
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
