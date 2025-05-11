export const allAccess = (req, res) => {
    res.status(200).send("📢 Contenido público.");
  };
  
  export const userBoard = (req, res) => {
    res.status(200).send("👤 Panel de usuario.");
  };
  
  export const adminBoard = (req, res) => {
    res.status(200).send("🛡️ Panel de administrador.");
  };
  
  export const moderatorBoard = (req, res) => {
    res.status(200).send("🎯 Panel de moderador.");
  };
  