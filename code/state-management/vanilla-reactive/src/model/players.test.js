import playersFactory from './players'
let players

beforeEach(() => {
  players = playersFactory()
})

test('should add players', () => {
  let list
  const EXPECTATION = [{
    name: 'Solid Snake'
  }]

  players.addChangeListener(data => {
    list = data.list
  })
  players.add('Solid Snake')
  expect(list).toEqual(EXPECTATION)
})
