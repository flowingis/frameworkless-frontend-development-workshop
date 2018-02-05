import playersReducer, { actions } from './players'

describe('players reducer', () => {
  test('should add player with an ADD event', () => {
    const newState = playersReducer({list: []}, actions.add('Solid Snake'))
    const EXPECTATION = {
      list: [
        {
          name: 'Solid Snake'
        }
      ]
    }
    expect(newState).toEqual(EXPECTATION)
  })
})
