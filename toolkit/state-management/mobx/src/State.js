import { observable, computed } from 'mobx'

const getPlayerName = (state, playerId) => state.players[playerId].name
const getTeamName = (state, teamId) => state.teams[teamId].name

export default class State {
    @observable players
    @observable teams
    @observable matches

    constructor(){
        this.players = []
        this.teams = []
        this.matches = []
    }

    @computed get teamsWithPlayers() {
        return this.teams.map((team,index) => {
            return {
                name: team.name,
                id: index,
                players: team.players.map(playerId => ({
                  name: getPlayerName(this, playerId),
                  id: playerId
                }))
            }
        })
    }

    @computed get matchesWithTeams() {
        return this.matches.map((match,index) => {
            return {
                ...match,
                id: index,
                teamAName: getTeamName(this, match.teamA),
                teamBName: getTeamName(this, match.teamB)
            }
        })
    }
}
