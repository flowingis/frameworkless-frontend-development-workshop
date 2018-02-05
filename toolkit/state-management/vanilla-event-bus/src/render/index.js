import players from './players/players.render'
import teams from './teams/teams.render'
import matches from './matches/matches.render'

export default (publish, state) => {
  players(publish, state)
  teams(publish, state)
  matches(publish, state)
}
