import template from './players.template.html'
import { htmlToElement } from '../../utils/dom'

export default (players, actions) => {
  const playerListContainer = document.querySelector('div[role="player-list"]')

  playerListContainer.innerHTML = ''

  const playerList = htmlToElement(template)
  const input = playerList.querySelector('input')

  playerList.querySelector('button').addEventListener('click', () => {
    actions.add(input.value)
  })

  const ul = playerList.querySelector('ul')

  players
  .forEach((player, index) => {
    ul.appendChild(htmlToElement(`<li>${index} - ${player.name}<li>`))
  })

  playerListContainer.appendChild(playerList)
}
