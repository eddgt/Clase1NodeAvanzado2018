module.exports = (request, reply) => {
  const result = request.payload;
  return reply({ result });
};
