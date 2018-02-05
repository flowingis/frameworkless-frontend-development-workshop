import {extractTeams} from './user-table'

const data = [
    {team: 'foo'},
    {team: 'foo'},
    {team: 'bar'}
]

describe('user-table', () => {
  describe('extractTeams', () => {
    test('it should extract team data from user list, ordered alphabetically', () => {
      const result = extractTeams(data)
      expect(result).toEqual(['bar', 'foo'])
    })
    test('it should work also with empty array', () => {
      expect(extractTeams([])).toEqual([])
    })
    test('it should work also with falsy param', () => {
      expect(extractTeams()).toEqual([])
    })
  })
})
