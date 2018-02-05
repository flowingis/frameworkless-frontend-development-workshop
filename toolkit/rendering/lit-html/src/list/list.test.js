import listFactory from './list'

describe('list', () => {
  test('it should work', () => {
    const list = listFactory([])
    expect(list).toBeTruthy()
  })
})
