import { html } from 'lit-html'
import { repeat } from 'lit-html/lib/repeat.js'

// No selected... why?

export default (value, teams = []) => html`
<div class="select full-width">
    <select role="select-team">
        <option value="-1">Select...</option>
        ${repeat(teams, (team) => html`<option value="${team}">${team}</option>`)}
    </select>
    <i class="fa fa-angle-down fa-2"></i>
</div>
`
