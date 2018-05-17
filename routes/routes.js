module.exports = {
  rutas: [
    {
      method: 'GET',
      path: '/',
      config: {
        handler: (request, reply) => reply({ data: 'Hola mundo' }),
      },
    },
    {
      method: 'POST',
      path: '/',
      config: {
        handler: (request, reply) => {
          const miJson = request.payload;
          return reply({ miJson });
        },
      },
    },
  ],
};
