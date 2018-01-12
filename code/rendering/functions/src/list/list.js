import listTemplate from './list.html'
import { htmlToElement } from '../utils/dom'
import userTableFactory from './components/user-table/user-table'
import dashboardFactory from './components/dashboard/dashboard'

export default (data) => {
  const page = htmlToElement(listTemplate)

  const userTable = userTableFactory(data)
  const dashboard = dashboardFactory(data)

  page
    .querySelector('user-table')
    .appendChild(userTable)

  page
    .querySelector('dashboard')
    .appendChild(dashboard)

  return page
}
