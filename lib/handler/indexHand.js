module.exports = (request, reply) => {
  const res = 'Hola desde modulo index';
  // return reply({ res });

  // Paso 1 Access the ioRedis instance
  const client = request.redis; // also available via request.server.app.redis

  // Paso 2 usando callback
  /*
  client.get('key1', (err, data) => {
    if (err) return reply(err);
    return reply(data);
  }); */

  // Paso 2 utilizando promesas
  client
    .get('key1:desa')
    .then(res => reply(res))
    .catch(err => reply(err));
};
