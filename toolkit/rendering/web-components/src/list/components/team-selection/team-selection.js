import template from './team-selection.html'

import { htmlToElement } from '../../../utils/dom'

export default class TeamSelection extends HTMLElement {
  connectedCallback () {
    const value = this.getAttribute('value')
    const teams = this.getAttribute('teams').split(',')

    const teamSelectionElement = htmlToElement(template)

    const select = teamSelectionElement.querySelector('select')

    teams.forEach(team => {
      const option = document.createElement('option')
      option.text = team
      option.value = team

      if (team === value) {
        option.selected = true
      }

      select.add(option)
    })

    this.appendChild(teamSelectionElement)
  }
}
