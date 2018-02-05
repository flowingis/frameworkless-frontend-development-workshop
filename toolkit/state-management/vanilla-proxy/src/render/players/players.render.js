import template from './players.template.html'
import { htmlToElement } from '../../utils/dom'
import playersActions from '../../actions/players'

export default (state) => {
  const playerListContainer = document.querySelector('div[role="player-list"]')

  playerListContainer.innerHTML = ''

  const playerList = htmlToElement(template)
  const input = playerList.querySelector('input')

  playerList.querySelector('button').addEventListener('click', () => {
    playersActions.add(state, input.value)
  })

  const ul = playerList.querySelector('ul')

  state.players
  .forEach((player, index) => {
    ul.appendChild(htmlToElement(`<li>${index} - ${player.name}<li>`))
  })

  playerListContainer.appendChild(playerList)
}
