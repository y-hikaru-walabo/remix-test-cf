import { Hono } from 'hono'
import { handle } from 'hono/cloudflare-pages'

const app = new Hono<any>()

app.get('/api/helloworld', (c) => {
  return c.json({
    message: 'hello hono',
  })
})

app.get('/api/test_env', (c) => {
  return c.json({
    message: c.env.TEST_ENV,
  })
})

export const onRequest = handle(app)
