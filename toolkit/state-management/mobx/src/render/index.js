import { autorun } from 'mobx'
import players from './players/players.render'
import teams from './teams/teams.render'
import matches from './matches/matches.render'
import playersActions from '../actions/players'
import teamsActions from '../actions/teams'
import matchesActions from '../actions/matches'

export default (state) => {
  const boundPlayersActions = {
    add: playersActions.add.bind(null, state)
  }

  const boundTeamsActions = {
    add: teamsActions.add.bind(null, state),
    addPlayer: teamsActions.addPlayer.bind(null, state),
    removePlayer: teamsActions.removePlayer.bind(null, state)
  }

  const boundMatchesActions = {
    add: matchesActions.add.bind(null, state),
    score: matchesActions.score.bind(null, state)
  }

  autorun(() => {
    players(state.players, boundPlayersActions)
  })
  autorun(() => {
    teams(state.teamsWithPlayers, boundTeamsActions)
  })

  autorun(() => {
    matches(state.matchesWithTeams, boundMatchesActions)
  })
}
