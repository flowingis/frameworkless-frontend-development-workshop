import teamTemplate from './team.html'
import { htmlToElement } from './../../../utils/dom'

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

const createTeamWidget = (name, number) => {
  const widget = htmlToElement(teamTemplate)
  widget.querySelector('[role=dashboard-name]').innerText = name
  widget.querySelector('[role=dashboard-number]').innerText = number
  return widget
}

export default data => {
  const dashboard = document.createElement('div')
  const teamData = extractTeamData(data)

  Object.keys(teamData).forEach(teamName => {
    const widget = createTeamWidget(teamName, teamData[teamName])
    dashboard.appendChild(widget)
  })

  return dashboard
}
