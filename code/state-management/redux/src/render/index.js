import players from './players/players.render'
import teams from './teams/teams.render'
import matches from './matches/matches.render'

export default (dispatch, state) => {
  players(dispatch, state)
  teams(dispatch, state)
  matches(dispatch, state)
}
