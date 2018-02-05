import ListPage from './list/list'
import Dashboard from './list/components/dashboard/dashboard'
import UserTable from './list/components/user-table/user-table'
import TeamSelection from './list/components/team-selection/team-selection'

window.customElements.define('list-page', ListPage)
window.customElements.define('list-dashboard', Dashboard)
window.customElements.define('user-table', UserTable)
window.customElements.define('team-selection', TeamSelection)
