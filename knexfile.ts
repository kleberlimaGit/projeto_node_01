import { Knex } from 'knex'

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'projeto_01_node',
    },
    migrations: {
      extension: 'ts',
      directory: './db/migrations',
    },
  },
}

export default config
