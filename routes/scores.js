const { getScores, getScore, addScore } = require('../controllers/scores')

//Item schema
const Item = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        recorded_score: { type: 'integer' }

    }
}

const getScoresOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item
            }
        }
    },
    handler: getScores
}

const getScoreOpts = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: getScore
}

const postScoreOpts = {
    schema: {
        response: {
            201: Item
        }
    },
    handler: addScore
}

function scoreRoutes(fastify, options, done) {

    fastify.get('/scores', getScoresOpts)

    fastify.get('/scores/:id', getScoreOpts)

    fastify.post('/scores', postScoreOpts)

    done()
}

module.exports = scoreRoutes