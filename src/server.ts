import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const estados = await knex
    .select(knex.ref('id').as('Identificacao'), 'nome')
    .from('estado')
  console.log(estados)
  return 'Hello world'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP SERVER IS RUNNING!')
  })
