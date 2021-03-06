const currentTournament = require('../dataAccess/currentTournament')

const execute = async (data) => {
  await currentTournament.set({ channelID: data.channelID, tournamentName: data.name })

  return { header: 'Success!', message: `${data.name} is now the current tournament in this channel.`}
}

module.exports = { execute }
