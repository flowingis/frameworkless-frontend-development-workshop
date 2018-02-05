import tableTemplate from './table.html'
import rowTemplate from './row.html'
import { htmlToElement } from './../../../utils/dom'
import teamSelection from '../team-selection/team-selection'

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

  const teamSelectionElement = teamSelection(user.team, teams)

  row.querySelector('team-selection').appendChild(teamSelectionElement)

  return row
}

export default data => {
  const table = htmlToElement(tableTemplate)

  const tBody = table.querySelector('tbody')

  const teams = extractTeams(data)
  data.forEach(user => {
    const row = createRow(user, teams)
    tBody.appendChild(row)
  })

  return table
}
