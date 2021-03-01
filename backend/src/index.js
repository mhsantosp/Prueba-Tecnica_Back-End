//arranca la app
import app from './app';
import './database';

// Inicio el servidor en el puerto que le indique
app.listen(app.get('port'), () => {
  console.log(`Servidor conectado en el puerto ${app.get('port')}`);
});