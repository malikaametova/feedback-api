import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Feedback API',
        version: '1.0.0',
        description: 'API for managing feedback and suggestions.',
      },
    },
    apis: ['./src/routes/*.ts', './src/schemas/*.ts'],
  };

  export const swaggerSpec = swaggerJsdoc(options);