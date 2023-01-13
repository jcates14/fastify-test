const fastify = require('fastify')({ logger: true })
fastify.register(require('./routes/scores'))
const PORT = 3001



const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }


}

start()