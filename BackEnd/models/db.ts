import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

dotenv.config();

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3036,
    database: 'restaurant_db' 
});

export const db = drizzle(connection);

try {
    console.log('The database was successfully connected');
} catch (error) {
    console.log('Error: ', error);
}