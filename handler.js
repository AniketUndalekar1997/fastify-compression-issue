const fs = require('fs');
const path = require('path');

const yourHandler = {
    async reproduceFastifyCompressErrorHandler(request, reply) {
        const largeFilePath = path.join(__dirname, 'large-response.json');

        // Read large response file
        const res = fs.readFileSync(largeFilePath, 'utf8');

        reply.header('Cache-Control', 's-maxage=600');
        reply.type('application/json');

        if (res) {
            reply.compress(res); // Use compression
        } else {
            reply.status(204).send();
        }
    },
};

module.exports = yourHandler;
