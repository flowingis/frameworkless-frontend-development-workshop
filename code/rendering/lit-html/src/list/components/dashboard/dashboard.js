import { html } from 'lit-html'
import { repeat } from 'lit-html/lib/repeat.js'

export const extractTeamData = data => {
  if (!data) {
    return {}
  }

  const result = {}

  data.forEach(user => {
    result[user.team] = result[user.team] || 0
    result[user.team]++
  })
  return result
}

const createTeamWidget = (name, number) => html`
    <span>
      <span> ${name} </span>
      <span> ${number} </span>
    </span>
`

export default data => {
  const teamData = extractTeamData(data)

  const dashboard = html`
    <div>
      ${repeat(Object.keys(teamData), teamName => createTeamWidget(teamName, teamData[teamName]))}
    </div>
  `

  return dashboard
}
