import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('users', {
  email: text().notNull().unique(),
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  password: text().notNull(),
});
