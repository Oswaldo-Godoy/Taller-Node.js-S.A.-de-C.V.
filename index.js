//Dependencies
const morgan = require('morgan');
const express = require('express');
const app = express();
// Routers
const empleados = require('./routes/empleados');
const user = require('./routes/user');
//Middleware
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const index = require ('./middleware/index');
const cors = require('./middleware/cors');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", index);            
app.use("/user", user);
app.use(auth);
app.use("/empleados", empleados);
app.use(notFound);

// 3000 es el puerto del servidor que estamos haciendo
app.listen(process.env.PORT || 3000, () =>{
    console.log("Server is running ...");
});


/* Verbos HTTP
GET - obtener recursos
POST - almacenar/ crear recursos
PATCH - modificar una parte de un recurso
PUT - modificar un recurso
DELETE - borrar un recurso
*/