import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
// Auth:
// import { signup, signin, protect } from './utils/auth'
import { connect } from './utils/db'

// import routers here:
import helloRouter from './resources/hello/hello.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

//Define any auth routes
/* app.post('/signup', signup)
app.post('/signin', signin)
*/

// auth middleware
//app.use('/api', protect)

// Define routes
/*
app.use('/api/user', userRouter)
app.use('/api/item', itemRouter)
app.use('/api/list', listRouter)
*/

app.use('/api', helloRouter)

export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
