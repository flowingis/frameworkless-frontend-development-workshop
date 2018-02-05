import teams, { EVENTS } from './teams'

describe('teams', () => {
  test('should initialize state with an empty array', () => {
    const newState = teams()
    expect(newState).toEqual({list: []})
  })
  test('should add team with an ADD event', () => {
    const newState = teams({list: []}, EVENTS.ADD, 'Acme')
    const EXPECTATION = {
      list: [
        {
          name: 'Acme',
          players: []
        }
      ]
    }
    expect(newState).toEqual(EXPECTATION)
  })
  test('should return the same state on any other event', () => {
    const state = {
      list: [
        {
          name: 'Acme',
          players: []
        }
      ]
    }
    const newState = teams(state, 'DUMMY_EVENT')
    expect(newState).toBe(state)
  })
  test('should add a player to a team with ADD_PLAYER event', () => {
    const INITIAL_STATE = {
      list: [
        {
          name: 'Acme',
          players: []
        },
        {
          name: 'Another Acme',
          players: []
        }
      ]
    }

    const newState = teams(INITIAL_STATE, EVENTS.ADD_PLAYER, {teamId: 1, playerId: 0})
    expect(newState.list[0].players.length).toBe(0)
    expect(newState.list[1].players.length).toBe(1)
    expect(newState.list[1].players[0]).toBe(0)
  })

  test('should remove player to a team with REMOVE_PLAYER event', () => {
    const INITIAL_STATE = {
      list: [
        {
          name: 'Acme',
          players: [12, 14]
        },
        {
          name: 'Another Acme',
          players: [34, 48]
        }
      ]
    }

    const newState = teams(INITIAL_STATE, EVENTS.REMOVE_PLAYER, {teamId: 1, playerId: 34})
    expect(newState.list[0].players.length).toBe(2)
    expect(newState.list[1].players.length).toBe(1)
    expect(newState.list[1].players).toEqual([48])
  })
})
