require("dotenv").config();

const hapi = require("hapi");

const server = new hapi.Server();

server.connection({ port: 9090 });
//Defino ruta
server.route({
  method: "GET",
  path: "/",
  handler: (request, reply) => {
    reply({ data: "Hola mundo XD, Clase #1 curso BDG Node.js Avanzado!" });
  }
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: (request, h) => {

      h.response ('Hello, ' + encodeURIComponent(request.params.name) + '!, glad to meet you :)');
  }
});

//Levanto server
server.start(err => {
  if (err) throw err;
  console.log(`Servidor levantado en: ${server.info.uri}`);
});
