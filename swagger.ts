const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
      title: 'My API',
      description: 'Description'
    },
    host: 'localhost:3000'
  };

  const outputFile = './BackendPablo/swagger/swagger-output.json';
const routes = ['./index.ts'];

swaggerAutogen(outputFile, routes, doc);