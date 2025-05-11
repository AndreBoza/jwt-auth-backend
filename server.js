import express from 'express';
import cors from 'cors';
import db from './app/models/index.js';

import authRoutes from './app/routes/auth.routes.js';
import userRoutes from './app/routes/user.routes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/test", userRoutes);

// Ruta base
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido al sistema con JWT." });
});

// DB Sync
db.sequelize.sync().then(() => {
  console.log("✅ Base de datos sincronizada.");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}.`);
});
