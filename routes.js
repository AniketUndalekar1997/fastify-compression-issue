const yourHandler = require('./handler');

async function routes(fastify) {
    fastify.route({
        method: 'GET',
        url: '/api/reproduce/compression-error',
        handler: yourHandler.reproduceFastifyCompressErrorHandler,
    });
}

module.exports = routes;
