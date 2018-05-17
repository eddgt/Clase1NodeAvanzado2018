require('dotenv').config();

const hapi = require('hapi');
// Registro de routes en el server
const Routes = require('./routes/routes');

const server = new hapi.Server();

server.connection({ port: 9090 });

// Defino ruta
server.route(Routes.rutas);

// Levanto server
server.start((err) => {
  if (err) throw err;
  console.log(`Servidor levantado en: ${server.info.uri}`);
});
