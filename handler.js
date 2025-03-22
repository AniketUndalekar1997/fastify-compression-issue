const fs = require('fs');
const path = require('path');

const yourHandler = {
    async reproduceFastifyCompressErrorHandler(request, reply) {
        // const sampleResponsePayload = path.join(__dirname, 'sampleJson.json');
        const largeResponsePayload = path.join(__dirname, 'large-response.json');

        // Read large response file
        const res = fs.readFileSync(largeResponsePayload, 'utf8');

        reply.header('Cache-Control', 's-maxage=600');
        reply.type('application/json');

        if (res) {
            return reply.compress(res); // Use compression
        } else {
            return reply.status(204).send();
        }
    },
};

module.exports = yourHandler;
