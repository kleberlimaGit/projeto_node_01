import fastify from 'fastify'
import 'dotenv/config'
import { transactionsRoutes } from './routes/transactions';

const app = fastify()
 app.register(transactionsRoutes)
app
  .listen({
    port: Number(process.env.SERVER_PORT),
  })
  .then(() => {
    console.log('HTTP SERVER IS RUNNING!')
  })
