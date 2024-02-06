import { Hono } from 'hono'
import { handle } from 'hono/cloudflare-pages'

const app = new Hono()

app.get('/api/helloworld', (c) => {
  return c.json({
    message: 'hello hono',
  })
})

export const onRequest = handle(app)
