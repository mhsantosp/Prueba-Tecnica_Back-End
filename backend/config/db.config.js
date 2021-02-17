const { MongoClient } = require("mongodb");

const NAME = process.env.MONGODB_NAME;
const URI = process.env.MONGODB_URI 
            ? process.env.MONGODB_URI 
            : 'mongodb://127.0.0.1:27017/databasetest';

const client = new MongoClient(URI, {
  useUnifiedTopology: true, //mantiene la coneccion abierta
});

module.exports = async () => {
  await client.connect();

  return client.db(NAME);
};
