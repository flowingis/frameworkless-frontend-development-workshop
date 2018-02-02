import Navigo from 'navigo'

const router = new Navigo()

const detail = params => {
  const element = document.createElement('p')
  element.innerHTML = `Detail - ${new Date()} with params ${JSON.stringify(params)}`
  document.body.appendChild(element)
}

const list = () => {
  const element = document.createElement('p')
  element.innerHTML = `List - ${new Date()}`
  document.body.appendChild(element)
}

const hyperDetail = params => {
  const element = document.createElement('p')
  element.innerHTML = `HyperDetail - ${new Date()} with params ${JSON.stringify(params)}`
  document.body.appendChild(element)
}

router
  .on({
    '/': list,
    '/detail/:id': detail,
    '/detail/:id/invoices/:invoiceId': hyperDetail
  })
  .resolve()
