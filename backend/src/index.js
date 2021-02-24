//arranca la app
import app from './app';
import './database'


app.listen(4800, function() {
  console.log('Servidor conectado en el puerto', 4800);
});