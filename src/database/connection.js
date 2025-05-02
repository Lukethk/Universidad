import sql from 'mssql';

const dbSettings = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    console.log("✅ Conectado a SQL Server");
    return pool;
  } catch (error) {
    console.error("❌ Error connecting to SQL Server:", error);
    return null;
  }
};
