import renderTeamSelection from './team-selection'
import { render } from 'lit-html'

const TEAMS = [
  'Red',
  'Green',
  'Blue',
  'Yellow'
]

const createADiv = () => document.createElement('div')

describe('team-selection', () => {
  test('it should render a single option when no team is provided', () => {
    const teamSelection = renderTeamSelection()
    const element = createADiv()
    render(teamSelection, element)
    const options = element.querySelectorAll('option')
    expect(options.length).toBe(1)
  })

  test('it should render options for every team', () => {
    const teamSelection = renderTeamSelection(null, TEAMS)
    const element = createADiv()
    render(teamSelection, element)
    const options = element.querySelectorAll('option')
    expect(options.length).toBe(TEAMS.length + 1)
  })
})
