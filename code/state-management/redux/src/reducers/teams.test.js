import teamsReducer, { actions } from './teams'

describe('teams reducer', () => {
  test('should add team with an ADD action', () => {
    const newState = teamsReducer({list: []}, actions.add('Acme'))
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
  test('should add a player to a team with ADD_PLAYER action', () => {
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

    const newState = teamsReducer(INITIAL_STATE, actions.addPlayer(1, 0))
    expect(newState.list[0].players.length).toBe(0)
    expect(newState.list[1].players.length).toBe(1)
    expect(newState.list[1].players[0]).toBe(0)
  })

  test('should remove player to a team with REMOVE_PLAYER action', () => {
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

    const newState = teamsReducer(INITIAL_STATE, actions.removePlayer(1, 34))
    expect(newState.list[0].players.length).toBe(2)
    expect(newState.list[1].players.length).toBe(1)
    expect(newState.list[1].players).toEqual([48])
  })
})
