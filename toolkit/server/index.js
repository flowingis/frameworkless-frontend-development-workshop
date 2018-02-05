const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const uuidv1 = require('uuid/v1')
const app = express()

app.use(bodyParser.json())

const FILE_PATH = path.join(__dirname, 'data', 'users.json')
const AUTH_HEADER = 'X-Authorization'
const PASSWORD = 'password'

const readDataFile = cb => fs.readFile(FILE_PATH, 'utf8', cb)
const writeDataFile = (content, cb) => fs.writeFile(FILE_PATH, content, 'utf8', cb)

const checkAuth = (req, res, cb) => {
  if (req.get(AUTH_HEADER) === PASSWORD) {
    cb()
  } else {
    res.status(401).send('Unauthorized')
  }
}

app.get('/api/users', (req, res) => {
  checkAuth(req, res, () => {
    readDataFile((err, content) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(content)
      }
    })
  })
})

app.get('/api/users/:guid', (req, res) => {
  checkAuth(req, res, () => {
    readDataFile((err, content) => {
      if (err) {
        res.status(500).send(err)
      } else {
        const data = JSON.parse(content)
        const user = data.find(user => user.guid === req.params.guid)
        if (user) {
          res.send(user)
        } else {
          res.status(404).send('Not Found')
        }
      }
    })
  })
})

app.delete('/api/users/:guid', (req, res) => {
  checkAuth(req, res, () => {
    readDataFile((err, content) => {
      if (err) {
        res.status(500).send(err)
      } else {
        const data = JSON.parse(content)
        const users = data.filter(user => user.guid !== req.params.guid)
        writeDataFile(JSON.stringify(users), (err, success) => {
          if (err) {
            res.status(500).send(err)
          } else {
            res.send(JSON.stringify('OK'))
          }
        })
      }
    })
  })
})

app.put('/api/users/:guid', (req, res) => {
  checkAuth(req, res, () => {
    readDataFile((err, content) => {
      if (err) {
        res.status(500).send(err)
      } else {
        const data = JSON.parse(content)
        let users = data.filter(user => user.guid !== req.params.guid)
        const newUser = Object.assign({guid: req.params.guid}, req.body)
        users = [...users, newUser]
        writeDataFile(JSON.stringify(users), (err, success) => {
          if (err) {
            res.status(500).send(err)
          } else {
            res.send(newUser)
          }
        })
      }
    })
  })
})

app.post('/api/users', (req, res) => {
  checkAuth(req, res, () => {
    readDataFile((err, content) => {
      if (err) {
        res.status(500).send(err)
      } else {
        const data = JSON.parse(content)
        const newUser = Object.assign({guid: uuidv1()}, req.body)
        const users = [...data, newUser]
        writeDataFile(JSON.stringify(users), (err, success) => {
          if (err) {
            res.status(500).send(err)
          } else {
            res.send(newUser)
          }
        })
      }
    })
  })
})

app.listen(3000, () => console.log('Server listening on port 3000!'))
