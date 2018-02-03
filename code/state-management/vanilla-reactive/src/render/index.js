import players from './players/players.render'
import teams from './teams/teams.render'
import matches from './matches/matches.render'

export default (state, model) => {
  players(state, model)
  teams(state, model)
  matches(state, model)
}
