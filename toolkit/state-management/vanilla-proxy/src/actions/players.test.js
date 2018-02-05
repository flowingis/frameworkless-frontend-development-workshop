import playersActions from './players'

test('should add players', () => {
  const state = {
    players: []
  }

  const EXPECTATION = [{
    name: 'Solid Snake'
  }]

  playersActions.add(state, 'Solid Snake')

  expect(state.players).toEqual(EXPECTATION)
})
