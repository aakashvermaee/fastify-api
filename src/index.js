// Require the framework and instantiate it
const fastify = require("fastify")({
    logger: false
});

// Declare a route
fastify.get('/', async (req, res) => {
    return {
        msg: "Hello, World!"
    }
});

require('./routes/').routes.forEach((route, index) => {
    route.forEach((route) => {
        fastify.route(route);
    });
});

// Import Swagger Options
const swagger = require('./config/swagger');

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options);

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`Server running on port: ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start();