import State from './State'

describe('State', () => {
  test('should have player name on teamsWithPlayers', () => {
    const state = new State()
    state.players = [
      {
        name: 'Solid Snake'
      },
      {
        name: 'Revolver Ocelot'
      }
    ]

    state.teams = [
      {
        name: 'Acme',
        players: [0, 1]
      }
    ]

    const result = state.teamsWithPlayers

    expect(result[0].id).toBe(0)
    expect(result[0].players[0]).toEqual({id: 0, name: 'Solid Snake'})
    expect(result[0].players[1]).toEqual({id: 1, name: 'Revolver Ocelot'})
  })

  test('should have team names on matchesWithTeams', () => {
    const STATE = {
      teams: [
        {
          name: 'Acme'
        },
        {
          name: 'Another Acme'
        }
      ],
      matches: [
        {
          teamA: 0,
          teamB: 1
        }
      ]
    }

    const state = new State()
    state.teams = [
      {
        name: 'Acme'
      },
      {
        name: 'Another Acme'
      }
    ]

    state.matches = [
      {
        teamA: 0,
        teamB: 1
      }
    ]

    const result = state.matchesWithTeams
    expect(result[0].id).toBe(0)
    expect(result[0].teamAName).toBe('Acme')
    expect(result[0].teamBName).toBe('Another Acme')
  })
})
