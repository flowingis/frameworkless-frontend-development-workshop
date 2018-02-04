import template from './matches.template.html'
import { htmlToElement } from '../../utils/dom'
import selector from './matches.selector'
import matchesActions from '../../actions/matches'

export default (state) => {
  const matchListContainer = document.querySelector('div[role="match-list"]')

  matchListContainer.innerHTML = ''

  const matchList = htmlToElement(template)
  const teamAInput = matchList.querySelector('input[role="team-a"]')
  const teamBInput = matchList.querySelector('input[role="team-b"]')

  matchList.querySelector('button').addEventListener('click', () => {
    matchesActions.add(state, parseInt(teamAInput.value), parseInt(teamBInput.value))
  })

  const ul = matchList.querySelector('ul')

  const matches = selector(state)

  matches
  .forEach((match, index) => {
    const matchTemplate = `<li>
                                <span>${match.teamAName} VS ${match.teamBName} (${match.teamAScore} - ${match.teamBScore})</span>
                                <button role="score-a">Score A</button>
                                <button role="score-b">Score B</button>
                            </li>`

    const element = htmlToElement(matchTemplate)

    element.querySelector('button[role="score-a"]').addEventListener('click', () => {
      matchesActions.score(state, match.id, match.teamA)
    })

    element.querySelector('button[role="score-b"]').addEventListener('click', () => {
      matchesActions.score(state, match.id, match.teamB)
    })

    ul.appendChild(element)
  })

  matchListContainer.appendChild(matchList)
}
