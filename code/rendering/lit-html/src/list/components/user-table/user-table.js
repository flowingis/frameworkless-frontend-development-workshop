import teamSelection from '../team-selection/team-selection'
import { html } from 'lit-html'
import { repeat } from 'lit-html/lib/repeat.js'

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
  const teamSelectionElement = teamSelection(user.team, teams)
  return html`
    <tr>
      <td><img width="50" src="${user.picture}" /></td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>
          ${teamSelectionElement}
      </td>
    </tr>
  `
}

export default data => {
  const teams = extractTeams(data)

  const table = html`
  <table>
    <thead>
        <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Team</th>
        </tr>
    </thead>
    <tbody>
      ${repeat(data, user => createRow(user, teams))}
    </tbody>
  </table>
  `
  return table
}
