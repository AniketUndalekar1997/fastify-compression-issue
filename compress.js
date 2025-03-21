const fp = require('fastify-plugin');
const compress = require('@fastify/compress');

module.exports = fp((fastify) => {
    fastify.register(compress, {
        encodings: ['gzip'],
        global: true,
    });
});
