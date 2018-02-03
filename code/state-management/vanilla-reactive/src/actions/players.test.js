import playersActionsFactory from './players'

test('should add players', () => {
  const state = {
    list: []
  }

  const playersActions = playersActionsFactory(state)
  const EXPECTATION = [{
    name: 'Solid Snake'
  }]

  playersActions.add('Solid Snake')

  expect(state.list).toEqual(EXPECTATION)
})

test('should throw an error if no state is provided', () => {
  expect(() => {
    playersActionsFactory()
  }).toThrow()
})

test('should format an invalid state', () => {
  const state = {}
  playersActionsFactory(state)
  expect(state.list).toEqual([])
})
