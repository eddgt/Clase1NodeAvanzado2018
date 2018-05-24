require('dotenv').config();

const hapi = require('hapi');
// Registro de routes en el server
const Routes = require('./routes/routes');

const server = new hapi.Server();

// como llamar variables de ambiente
const serverPort = process.env[`PORT_${process.env.NODE_ENV.toUpperCase()}`];

console.log(`PORT_${process.env.NODE_ENV.toUpperCase()}`);
console.log(serverPort);
server.connection({ port: serverPort });

// Defino ruta
server.route(Routes.rutas);

// Levanto server
server.start((err) => {
  if (err) throw err;
  console.log(`Servidor levantado en: ${server.info.uri}`);
});

// exportar nuestro server
module.exports = server;
