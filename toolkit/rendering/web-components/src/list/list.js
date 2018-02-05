import listTemplate from './list.html'
import { htmlToElement } from '../utils/dom'

export default class ListPage extends HTMLElement {
  connectedCallback () {
    const page = htmlToElement(listTemplate)
    this.appendChild(page)
  }
}
