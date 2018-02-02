import eventBusFactory from './eventBus'
import players from './subscribers/players'
import teams from './subscribers/teams'
import matches from './subscribers/matches'
import render from './render'

const eventBus = eventBusFactory()

eventBus.subscribe('players', players)
eventBus.subscribe('teams', teams)
eventBus.subscribe('matches', matches)

eventBus.connect(state => {
  window.requestAnimationFrame(() => render(eventBus.publish, state))
})
