import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
config({ path: envFile });

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_FILE_NAME!,
  },
});
