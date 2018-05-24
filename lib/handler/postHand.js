module.exports = (request, reply) => {
  const parametros = request.payload;
  return reply({ parametros });
};
