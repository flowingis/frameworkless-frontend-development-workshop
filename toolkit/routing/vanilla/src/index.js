import router from './router'

router.init()

const list = () => {
  const element = document.createElement('p')
  element.innerHTML = `List - ${new Date()}`
  document.body.appendChild(element)
}

const detail = params => {
  const element = document.createElement('p')
  element.innerHTML = `Detail - ${new Date()} with params ${JSON.stringify(params)}`
  document.body.appendChild(element)
}

const hyperDetail = params => {
  const element = document.createElement('p')
  element.innerHTML = `HyperDetail - ${new Date()} with params ${JSON.stringify(params)}`
  document.body.appendChild(element)
}

router.addRoute(/detail\/(.*)\/invoices\/(.*)/, hyperDetail)
router.addRoute(/detail\/(.*)/, detail)
router.addRoute('/', list)

document.querySelectorAll('a[data-navigation]').forEach(a => {
  const path = a.pathname
  a.addEventListener('click', (e) => {
    e.preventDefault()
    router.navigate(path)
  })
})
