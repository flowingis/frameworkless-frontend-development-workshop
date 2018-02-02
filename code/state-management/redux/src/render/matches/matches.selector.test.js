import selector from './matches.selector'

describe('matches selector', () => {
  test('should print team names and Id', () => {
    const STATE = {
      teams: {
        list: [
          {
            name: 'Acme'
          },
          {
            name: 'Another Acme'
          }
        ]
      },
      matches: {
        list: [
          {
            teamA: 0,
            teamB: 1
          }
        ]
      }
    }

    const result = selector(STATE)
    expect(result[0].id).toBe(0)
    expect(result[0].teamAName).toBe('Acme')
    expect(result[0].teamBName).toBe('Another Acme')
  })
})
