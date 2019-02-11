const AWS = require('aws-sdk')
const documentDB = new AWS.DynamoDB.DocumentClient()

const execute = async (command) => {
  if (!command.tournament) return

  const tournament = command.tournament
  if (tournament.create) {
    return createTournament(tournament.create)
  }
}

const createTournament = async (newTournament) => {
  const name = newTournament.name
  const rounds = newTournament.rounds

  const params = {
    TableName: 'tournaBot-tournaments',
    Item: { name, rounds }
  }

  console.log(`SAVING NEW TOURNAMENT: ${JSON.stringify(params)}`)

  let error = null
  await documentDB.put(params, (err) => { error = err }).promise()
  if (error) return { err: error }

  return { result: `${name} tournament started, with ${rounds} rounds.` }
}

module.exports = { execute }
