import userTableFactory, {extractTeams} from './user-table'

const data = [
    {team: 'foo'},
    {team: 'foo'},
    {team: 'bar'}
]

describe('user-table', () => {
  test('it should have a row for each user', () => {
    const userTable = userTableFactory(data)
    const rows = Array.from(userTable.querySelectorAll('tbody>tr'))
    expect(rows.length).toBe(data.length)
  })
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
