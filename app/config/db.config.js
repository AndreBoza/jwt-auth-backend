export default {
  HOST: "aws.connectdb.cloud", // ejemplo
  USER: "andre_user",
  PASSWORD: "claveSegura123",
  DB: "jwt_auth_db",
  dialect: "mysql", // o "postgres"
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
