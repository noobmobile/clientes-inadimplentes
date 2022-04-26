import mongoose from 'mongoose'
import app from './app'
import { APP_PORT, DB_URI, IS_TEST } from '@/config/config'

let dbURI: string = DB_URI

if (IS_TEST) {
  dbURI += '-test'
}

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: true,
  poolSize: 10, 
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000, 
}

mongoose
  .connect(dbURI, options)
  .then(() => {
    app.listen(APP_PORT)
  })

