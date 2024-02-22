import {
  bigint,
  date,
  int,
  mysqlTable,
  serial,
  time,
  varchar,
} from "drizzle-orm/mysql-core";

// model table menu
export const MenuFood = mysqlTable('menu_food', {
  id_food: serial('id_food')
    .autoincrement()
    .primaryKey()
    .notNull(),
  view_food: bigint('view_food', {mode: "number", unsigned: true})
    .references(() => ViewFood.id_view)
    .notNull(),
  number_foods: int('number_foods'),
  name_food: varchar('name_food', {length: 45}),
  about_food: varchar('about_food', {length: 450}),
  price: int('price'),
});

// model table user role
export const UserRole = mysqlTable('role_user', {
  id_role: serial('id_role')
    .primaryKey()
    .notNull(),
  name_role: varchar('name_role', { length: 25}),
});

// model table tables_food
export const Table_Food = mysqlTable('table', {
  id_table: serial('id_table')
    .primaryKey()
    .notNull(),
  table_number: int('table_number'),
  number_seats: int('number_seats'),
});

// model table view food
export const ViewFood = mysqlTable('view_food', {
  id_view: serial('id_view')
    .primaryKey()
    .notNull(),
  name_view: varchar('name_view', { length: 50})
});

// model table user
export const User = mysqlTable('user', {
  id_user: serial('id_user')
    .primaryKey()
    .notNull()
    .unique('UID_USER'),
  first_name: varchar('first_name', { length: 20}),
  last_name: varchar('last_name', { length: 30}),
  data_birth: date('data_birth'),
  user_role: bigint('user_role', { mode: "number", unsigned: true})
    .references(()  => UserRole.id_role)
    .notNull(),
  email: varchar('email', { length: 50}),
  password: varchar('password', { length: 50})
});

// model table order
export const Order = mysqlTable('order', {
  id_order: serial('id_order')
    .primaryKey()
    .notNull(),
  order_user: bigint('order_user', { mode: "number", unsigned: true})
  .references(() => User.id_user)
    .notNull(),
  id_table: bigint('id_table', { mode: "number", unsigned: true})
    .notNull(),
  order_date: date('order_date'),
  order_time: time('order_time'),
});

// model table score
export const Score = mysqlTable('score', {
  id_score: serial('id_score')
    .primaryKey()
    .notNull(),
  score_table: bigint('score_table', { mode: "number", unsigned: true})
    .references(() => Table_Food.id_table)
    .notNull(),
  date_score: date('date_score'),
  amount_score: int('amount_score'),
});

// model table order_menu
export const OrderMenu = mysqlTable('order_menu', {
  id_order_menu: serial('id_order_menu')
    .primaryKey()
    .notNull(),
  order_food: bigint('order_food', { mode: "number", unsigned: true})
    .references(() => MenuFood.id_food)
    .notNull(),
  number_order: bigint('number_id_order', { mode: "number", unsigned: true})
    .references(() => Order.id_order)
    .notNull(),
});

export const DetailsScore = mysqlTable('details_score', {
  id_score: bigint('id_score', { mode: "number", unsigned: true})
    .notNull(),
  check_menu: bigint('check_menu', { mode: "number", unsigned: true})
    .references(() => OrderMenu.id_order_menu)
    .notNull()
});