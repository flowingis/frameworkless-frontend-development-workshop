import selector from './teams.selector'

describe('teams selector', () => {
  test('should player team names and Id', () => {
    const STATE = {
      teams: {
        list: [
          {
            name: 'Acme',
            players: [0, 1]
          }
        ]
      },
      players: {
        list: [
          {
            name: 'Solid Snake'
          },
          {
            name: 'Revolver Ocelot'
          }
        ]
      }
    }

    const result = selector(STATE)
    expect(result[0].id).toBe(0)
    expect(result[0].players[0]).toEqual({id: 0, name: 'Solid Snake'})
    expect(result[0].players[1]).toEqual({id: 1, name: 'Revolver Ocelot'})
  })
})
