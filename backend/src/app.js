//configurarciones
import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';

import tareasRoutes from './routes/task.routes'

const app = express();

app.set('pkg', pkg);

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({
    name: app.get('pgk').name,
    author: app.get('pgk').author,
    description: app.get('pgk').description,
    version: app.get('pgk').version,
  })
})

app.use('/tareas', tareasRoutes);

export default app;