import {extractTeamData} from './dashboard'

const data = [
    {team: 'foo'},
    {team: 'foo'},
    {team: 'bar'}
]

describe.only('dashboard', () => {
  describe('extractTeamData', () => {
    test('it should extract team data from user list', () => {
      const result = extractTeamData(data)
      expect(Object.keys(result).length).toBe(2)
      expect(result.foo).toBe(2)
      expect(result.bar).toBe(1)
    })
    test('it should work also with empty array', () => {
      expect(extractTeamData([])).toEqual({})
    })
    test('it should work also with falsy param', () => {
      expect(extractTeamData()).toEqual({})
    })
  })
})
