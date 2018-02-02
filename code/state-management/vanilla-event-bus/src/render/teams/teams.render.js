import { EVENTS } from '../../subscribers/teams'
import template from './teams.template.html'
import teamTemplate from './team.template.html'
import { htmlToElement } from '../../utils/dom'
import selector from './teams.selector'

const createTeamElement = (team, publish) => {
  const element = htmlToElement(teamTemplate)
  element.querySelector('span').innerText = `${team.id} - ${team.name}`

  const ul = element.querySelector('ul')

  team.players.forEach(player => {
    const playerElement = htmlToElement(`<li>${player.name}<button>X</button></li>`)

    const onClick = () => {
      publish(EVENTS.REMOVE_PLAYER, {teamId: team.id, playerId: player.id})
    }

    playerElement.querySelector('button').addEventListener('click', onClick)
    ul.appendChild(playerElement)
  })
  return element
}

export default (publish, state) => {
  const teamListContainer = document.querySelector('div[role="team-list"]')

  teamListContainer.innerHTML = ''

  const teamList = htmlToElement(template)
  const teamNameInput = teamList.querySelector('input[role="team-name"]')

  const teamIdInput = teamList.querySelector('input[role="team-id"]')
  const playerIdInput = teamList.querySelector('input[role="player-id"]')

  teamList.querySelector('button[role="add"]').addEventListener('click', () => {
    publish(EVENTS.ADD, teamNameInput.value)
  })

  teamList.querySelector('button[role="add-player"]').addEventListener('click', () => {
    publish(EVENTS.ADD_PLAYER, {teamId: parseInt(teamIdInput.value), playerId: parseInt(playerIdInput.value)})
  })

  const ul = teamList.querySelector('ul')

  const teams = selector(state)

  teams
  .forEach((team, index) => {
    ul.appendChild(createTeamElement(team, publish))
  })

  teamListContainer.appendChild(teamList)
}
