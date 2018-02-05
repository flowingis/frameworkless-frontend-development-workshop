import renderTeamSelection from './team-selection'

const TEAMS = [
  'Red',
  'Green',
  'Blue',
  'Yellow'
]

describe('team-selection', () => {
  test('it should render a single option when no team is provided', () => {
    const teamSelection = renderTeamSelection()
    const options = teamSelection.querySelectorAll('option')
    expect(options.length).toBe(1)
  })

  test('it should render options for every team', () => {
    const teamSelection = renderTeamSelection(null, TEAMS)
    const options = teamSelection.querySelectorAll('option')
    expect(options.length).toBe(TEAMS.length + 1)
  })

  test('it manage team selection', () => {
    const teamSelection = renderTeamSelection(TEAMS[1], TEAMS)

    const selectedOption = teamSelection.querySelector(`option[value="${TEAMS[1]}"]`)
    expect(selectedOption.selected).toBeTruthy()

    const unselectedOption = teamSelection.querySelector(`option[value="${TEAMS[0]}"]`)
    expect(unselectedOption.selected).toBeFalsy()
  })
})
