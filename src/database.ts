import 'dotenv/config'
import knex , { Knex } from 'knex'

export const config: Knex.Config = {
  client: 'mysql2',
  connection: {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: 'projeto_01_node',
  },
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knexConection = knex(config)
