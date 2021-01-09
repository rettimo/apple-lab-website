/* eslint-disable consistent-return */
import mongoose from 'mongoose'

export const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  const connect = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  return connect
}
