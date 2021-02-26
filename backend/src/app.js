//configurarciones palicación express
import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import {createRoles} from './libs/initialSetup';
import usuariosRoutes from './routes/user.routes';
import tareasRoutes from './routes/tasks.routes';
import authRoutes from './routes/auth.routes';

const app = express();
createRoles();

app.set('pkg', pkg); /* asignar un nombre y valor a la variable, guardarlo en express para luego optenerlo */

app.use(morgan('dev'));
app.use(express.json()); //entender que datos que llegan en formato json

app.get('/', (req, res) => {
  res.json({
    name: app.get('pgk').name,
    author: app.get('pgk').author,
    description: app.get('pgk').description,
    version: app.get('pgk').version
  })
})

app.use('/users', usuariosRoutes);
app.use('/tasks', tareasRoutes);
app.use('/auth', authRoutes);

export default app;