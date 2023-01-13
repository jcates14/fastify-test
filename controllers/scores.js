let scores = require('../Scores')
const { v4: uuidv4 } = require('uuid')

const getScores = (req, reply) => {
    reply.send(scores)
}

const getScore = (req, reply) => {
    const { id } = req.params
    const score = scores.find((score) => score.id === id)
    reply.send(score)
}

const addScore = (req, reply) => {
    const { name } = req.body
    const { recorded_score } = req.body
    const score = {
        id: uuidv4(),
        name,
        recorded_score
    }

    scores = [...scores, score]

    reply.code(201).send(score)

}

module.exports = {
    getScores,
    getScore,
    addScore
}


