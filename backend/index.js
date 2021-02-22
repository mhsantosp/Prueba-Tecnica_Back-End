require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//routers
app.use('/api', require('./routes/personas'));
app.use('/api', require('./routes/tareas'));


// app.get("/registos", (req, res) => {
//   res.render('registos');
// });
// app.post("/registos", async (req, res, next) => {
//   try {
//     const personas = await Personas.create({
//       email: req.body.email,
//       pasword: req.body.pasword
//     });
//     res.redirect('/login');
//   } catch (err) {
//     return next(err);
//   }
// });

// app.get("/login", (req, res) => {
//   res.render('login');
// });
// app.post("/logiin", async (req, res, next) => {});

// app.get("/logout", (req, res) => {});


// start the server
app.listen(app.get('port'), () => {
  console.log(`Servidor conectado en el puerto ${app.get('port')}`)
})

