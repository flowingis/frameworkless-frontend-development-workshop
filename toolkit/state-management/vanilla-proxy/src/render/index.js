import players from './players/players.render'
import teams from './teams/teams.render'
import matches from './matches/matches.render'

export default (state) => {
  players(state)
  teams(state)
  matches(state)
}
