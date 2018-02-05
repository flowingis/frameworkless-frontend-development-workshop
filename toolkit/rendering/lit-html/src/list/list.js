import userTableFactory from './components/user-table/user-table'
import dashboardFactory from './components/dashboard/dashboard'
import { html } from 'lit-html'

export default (data) => {
  const dashboard = dashboardFactory(data)
  const userTable = userTableFactory(data)

  return html`
    <section>
      <h1>Frameworkless</h1>
      ${dashboard}
      ${userTable}
    </section>
  `
}
