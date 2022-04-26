import express from 'express'
import cors from 'cors'
import routes from '@/routes'
import errorMiddleware from './middlewares/error'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use("/api", routes)

app.use(errorMiddleware);

export default app
