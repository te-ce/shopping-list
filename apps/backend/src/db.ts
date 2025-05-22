import mongoose from 'mongoose';
import config from './config/config';

export async function dbConnection() {
  await mongoose.connect(config.mongoUrl);

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('Database connected successfully');
  });
}
