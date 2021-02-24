import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/pruebatecback", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
})
  .then(db => console.log('Base de Datos Conectada!'))
  .catch(err => console.log('Error', err));