const express = require('express')
const bodyParser = require('body-parser')
const uuidv1 = require('uuid/v1')
const app = express()

app.use(bodyParser.json())

const projects = []

app.get('/api/projects', (req, res) => {
  res.send(projects)
})

app.post('/api/projects', (req, res) => {
  const newProject = Object.assign({guid: uuidv1()}, req.body)
  projects.push(newProject)
  res.send(newProject)
})

app.put('/api/projects/:guid/start', (req, res) => {
  res.send({success: true})
})

app.put('/api/projects/:guid/stop', (req, res) => {
  res.send({success: true})
})

app.listen(3000, () => console.log('Server listening on port 3000!'))
