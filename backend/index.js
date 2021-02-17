require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//settings
app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));

//middleware
app.use(cors());
app.use(express.json());

//routers
app.use('/api', require('./routes/personas'));
app.use('/api', require('./routes/tareas'));



app.listen(app.get('port'), () => {
  console.log(`Servidor conectado en el puerto ${app.get('port')}`)
})