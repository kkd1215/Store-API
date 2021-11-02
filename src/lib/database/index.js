// connect to db
const mongoose = require('mongoose');
// config variables
const CONFIG = require('../../config');

// connect to mongo db
const connectDB = async () => {
    mongoose.set('useCreateIndex', true);
    mongoose.connect(CONFIG.dbUrl, {
      keepAlive: 1,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      promiseLibrary: Promise,
      useFindAndModify: false,
    });
    mongoose.connection.on('error', () => {
      throw new Error(`Unable to connect to database: ${CONFIG.dbUrl}`);
    });
}

module.exports = connectDB;