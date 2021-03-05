import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const {
  MONGODB_HOST,
  MONGODB_DB,
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_PORT,
} = process.env;

let MONGODB_URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_DB}?retryWrites=true&w=majority`;
if (MONGODB_PORT) {
  MONGODB_URI = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB}?retryWrites=true&w=majority`;
}
console.log(MONGODB_URI);
export async function init() {
  try {
    const db = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Mongodb is connected to', db.connection.host);
  } catch (error) {
    console.error(error);
  }
}
