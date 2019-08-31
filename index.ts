require('dotenv').config()

import express from 'express'

const app = express()

app.use('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.setHeader('Expires', '-1')
  res.setHeader('Cache-Control', 'must-revalidate, private')
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')

  next()
})

export default app