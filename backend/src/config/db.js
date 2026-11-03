import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

pool
  .connect()
  .then((client) => {
    console.log("Connected to database!");
    client.release();
  })
  .catch((error) => {
    console.error("Database connection error", error.message);
  });

pool.on("error", (error) => {
  console.error("Unexpected database error on idle client", error);
});

export default pool;
