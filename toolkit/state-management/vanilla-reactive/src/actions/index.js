import observableFactory from '../observableFactory'
import playersFactory from './players'
import teamsFactory from './teams'
import matchesFactory from './matches'

const state = {
  players: {
    list: []
  },
  teams: {
    list: []
  },
  matches: {
    list: []
  }
}

const base = {
  players: playersFactory(state.players),
  teams: teamsFactory(state.teams),
  matches: matchesFactory(state.matches)
}

export default observableFactory(base, () => state)
