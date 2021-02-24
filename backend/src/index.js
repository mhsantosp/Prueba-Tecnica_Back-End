//arranca la app
import app from './app';
import './database'


app.listen(5200, function() {
  console.log('Servidor conectado en el puerto', 5200);
});