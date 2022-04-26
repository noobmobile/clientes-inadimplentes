import mongoose from 'mongoose'
import { DB_URI } from '../../config/config'

const setupTestDB = () => {
  beforeAll(async () => {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      autoIndex: true,
      poolSize: 10, 
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000, 
      socketTimeoutMS: 45000,
    })
  })

  beforeEach(async () => {
    await Promise.all(
      Object.values(mongoose.connection.collections).map(async (collection) => collection.deleteMany({})),
    )
  })

  afterAll(async () => {
    await mongoose.disconnect()
  })
}

export default setupTestDB
