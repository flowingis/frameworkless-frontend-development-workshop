import dashboardFactory, {extractTeamData} from './dashboard'

const data = [
    {team: 'foo'},
    {team: 'foo'},
    {team: 'bar'}
]

describe('dashboard', () => {
  test('it should have a span for each team', () => {
    const dashboard = dashboardFactory(data)
    const widgets = Array.from(dashboard.querySelectorAll('div>span'))
    expect(widgets.length).toBe(2)
  })
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
