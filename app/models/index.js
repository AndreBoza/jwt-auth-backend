import Sequelize from 'sequelize';
import dbConfig from '../config/db.config.js';

// Crear conexión
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool,
  logging: false // Opcional: desactiva logs de SQL en consola
});

// Inicializar DB
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar modelos
db.user = (await import('./user.model.js')).default(sequelize, Sequelize);
db.role = (await import('./role.model.js')).default(sequelize, Sequelize);

// Relación N:M entre usuarios y roles
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

export default db;
