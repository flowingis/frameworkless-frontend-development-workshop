import tableTemplate from './table.html'
import rowTemplate from './row.html'
import { htmlToElement } from './../../../utils/dom'
import data from './../../../data/people.json'

export const extractTeams = data => {
  if (!data) {
    return []
  }

  const result = []

  data.forEach(user => {
    if (!result.includes(user.team)) {
      result.push(user.team)
    }
  })

  return result.sort()
}

const createRow = (user, teams) => {
  const row = htmlToElement(rowTemplate)

  row.querySelector('[role=row-picture]').src = user.picture
  row.querySelector('[role=row-name]').innerText = user.name
  row.querySelector('[role=row-email]').innerText = user.email
  row.querySelector('team-selection').setAttribute('value', user.team)
  row.querySelector('team-selection').setAttribute('teams', teams)

  return row
}

export default class UserTable extends HTMLElement {
  connectedCallback () {
    const table = htmlToElement(tableTemplate)

    const tBody = table.querySelector('tbody')

    const teams = extractTeams(data)
    data.forEach(user => {
      const row = createRow(user, teams)
      tBody.appendChild(row)
    })

    this.appendChild(table)
  }
}
