import players, { EVENTS } from './players'

describe('players', () => {
  test('should initialize state with an empty array', () => {
    const newState = players()
    expect(newState).toEqual({list: []})
  })
  test('should add player with an ADD event', () => {
    const newState = players({list: []}, EVENTS.ADD, 'Solid Snake')
    const EXPECTATION = {
      list: [
        {
          name: 'Solid Snake'
        }
      ]
    }
    expect(newState).toEqual(EXPECTATION)
  })
  test('should return the same state on any other event', () => {
    const state = {
      list: [
        {
          name: 'Solid Snake'
        }
      ]
    }
    const newState = players(state, 'DUMMY_EVENT')
    expect(newState).toBe(state)
  })
})
