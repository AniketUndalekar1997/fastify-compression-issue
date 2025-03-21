const fastify = require('fastify')({ logger: true });
const compress = require('./compress');
const routes = require('./routes');

fastify.register(compress);
fastify.register(routes);

const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: '0.0.0.0' });
        console.log('Server running at http://localhost:3000');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
