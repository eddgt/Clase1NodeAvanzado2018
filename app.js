require('dotenv').config();

const hapi = require('hapi');
// Registro de routes en el server
const Routes = require('./routes/routes');

// importar redis
const hapiRedis = require('hapi-ioredis');

// plugins
const hapiPlugins = [
  {
    register: hapiRedis,
    options: {
      url: 'redis://127.0.0.1:6379',
    },
  },
];

const server = new hapi.Server();

// como llamar variables de ambiente
const serverPort = process.env[`PORT_${process.env.NODE_ENV.toUpperCase()}`];

console.log(`PORT_${process.env.NODE_ENV.toUpperCase()}`);
console.log(serverPort);
server.connection({ port: serverPort });

// registrar plugins de hapi
server.register(hapiPlugins, (err) => {
  if (err) throw err;

  // Levanto server
  server.start((error) => {
    if (error) throw error;
    console.log(`Servidor levantado en: ${server.info.uri}`);
  });
});

// Defino ruta
server.route(Routes.rutas);

// exportar nuestro server
module.exports = server;
