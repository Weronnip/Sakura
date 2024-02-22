// import library
import { defineConfig } from 'drizzle-kit'

// export model database
export default defineConfig({
  schema: './models/schema.ts',
  driver: 'mysql2',
  dbCredentials: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3036,
    database: 'restaurant_db',
  },
  verbose: true,
  strict: true,
});