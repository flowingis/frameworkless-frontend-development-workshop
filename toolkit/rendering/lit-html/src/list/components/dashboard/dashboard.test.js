import dashboardFactory, {extractTeamData} from './dashboard'
import { render } from 'lit-html'

const data = [
    {team: 'foo'},
    {team: 'foo'},
    {team: 'bar'}
]

const createADiv = () => document.createElement('div')

describe.only('dashboard', () => {
  test('it should have a span for each team', () => {
    const dashboard = dashboardFactory(data)
    const element = createADiv()
    render(dashboard, element)
    const widgets = Array.from(element.querySelectorAll('div>span'))
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
