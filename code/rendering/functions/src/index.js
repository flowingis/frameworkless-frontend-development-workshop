import listFactory from './list/list'
import data from './data/people.json'

const rootNode = document.getElementById('root')

const list = listFactory(data)

rootNode.appendChild(list)
