import users from './users'

document
.querySelector('button[role="list"]')
.addEventListener('click', () => {
  users
  .list()
  .then(response => {
    console.log(response)
  })
})

document
.querySelector('button[role="detail"]')
.addEventListener('click', () => {
  users
  .detail('f854be06-1e93-4356-a848-71c022136270')
  .then(response => {
    console.log(response)
  })
})

document
.querySelector('button[role="add"]')
.addEventListener('click', () => {
  const newUser = {
    name: 'Solid Snake'
  }

  users
  .add(newUser)
  .then(response => {
    console.log(response)
  })
})

document
.querySelector('button[role="update"]')
.addEventListener('click', () => {
  const newUser = {
    name: 'Liquid Snake'
  }

  users
  .update('f854be06-1e93-4356-a848-71c022136270', newUser)
  .then(response => {
    console.log(response)
  })
})

document
.querySelector('button[role="delete"]')
.addEventListener('click', () => {
  users
  .delete('f854be06-1e93-4356-a848-71c022136270')
  .then(response => {
    console.log(response)
  })
})
