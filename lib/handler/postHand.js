module.exports = (request, reply) => {
  const parametros = request.payload;
  // return reply({ parametros });

  request.redis
    .hgetall(`endpoint${request.params.idService}:${process.env.NODE_ENV}`)
    .then(res => reply(res))
    .catch(err => reply(err));
};
