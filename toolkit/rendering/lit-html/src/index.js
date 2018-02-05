import listFactory from './list/list'
import data from './data/people.json'
import { render } from 'lit-html'

const rootNode = document.getElementById('root')

const list = listFactory(data)
render(list, rootNode)
