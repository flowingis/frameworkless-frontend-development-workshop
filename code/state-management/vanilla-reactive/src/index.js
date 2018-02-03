import playersModelFactory from './model/players'
import teamsModelFactory from './model/teams'
import matchesModelFactory from './model/matches'
import render from './render'

const state = {}
const executeRender = (state, model) => window.requestAnimationFrame(() => render(state, model))
const playersModel = playersModelFactory()
const teamsModel = teamsModelFactory()
const matchesModel = matchesModelFactory()

const model = {
  players: playersModel,
  teams: teamsModel,
  matches: matchesModel
}

playersModel.addChangeListener(players => {
  state.players = players
  executeRender(state, model)
})

teamsModel.addChangeListener(teams => {
  state.teams = teams
  executeRender(state, model)
})

matchesModel.addChangeListener(matches => {
  state.matches = matches
  executeRender(state, model)
})
