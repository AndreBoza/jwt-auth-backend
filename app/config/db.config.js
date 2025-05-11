import dotenv from 'dotenv';
dotenv.config();  // Cargar las variables de entorno desde .env

export default {
  HOST: process.env.DB_HOST || "localhost",  // Usar la variable de entorno DB_HOST o "localhost" por defecto
  USER: process.env.DB_USER || "root",      // Usar la variable de entorno DB_USER o "root" por defecto
  PASSWORD: process.env.DB_PASSWORD || "",  // Usar la variable de entorno DB_PASSWORD o vacío por defecto
  DB: process.env.DB_NAME || "jwt_auth_db",  // Usar la variable de entorno DB_NAME o "jwt_auth_db" por defecto
  dialect: process.env.DB_DIALECT || "mysql", // Usar la variable de entorno DB_DIALECT o "mysql" por defecto
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
