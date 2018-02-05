import userTableFactory, {extractTeams} from './user-table'
import { render } from 'lit-html'

const data = [
    {team: 'foo'},
    {team: 'foo'},
    {team: 'bar'}
]

const createADiv = () => document.createElement('div')

describe('user-table', () => {
  test('it should have a row for each user', () => {
    const userTable = userTableFactory(data)
    const element = createADiv()
    render(userTable, element)
    const rows = Array.from(element.querySelectorAll('tbody>tr'))
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
