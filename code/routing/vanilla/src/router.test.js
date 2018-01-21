import { createRouter } from './router'

jest.useFakeTimers()

const mockWindow = {
  location: {
    href: 'http://localhost:8080'
  },
  setInterval: global.setInterval
}

beforeEach(() => {
  mockWindow.location.href = 'http://localhost:8080'
})

describe('router', () => {
  test('it should invoke the right route', () => {
    let result

    const router = createRouter(mockWindow)

    router.addRoute('/', () => {
      result = 0
    })

    router.addRoute('/detail', () => {
      result = 1
    })

    router.init()

    mockWindow.location.href = 'http://localhost:8080/#/'

    jest.runTimersToTime(1000)

    expect(result).toBe(0)

    mockWindow.location.href = 'http://localhost:8080/#/detail'

    jest.runTimersToTime(1000)

    expect(result).toBe(1)
  })

  test('it should work with regex', () => {
    let params

    const router = createRouter(mockWindow)

    router.addRoute(/detail\/(.*)\/invoices\/(.*)/, p => {
      params = p
    })

    router.init()

    mockWindow.location.href = 'http://localhost:8080/#/detail/1/invoices/2'

    jest.runTimersToTime(1000)

    expect(params.length).toBe(2)
    expect(params[0]).toBe('1')
    expect(params[1]).toBe('2')
  })

  test('it should clear timers on dispose', () => {
    expect(() => {
      const router = createRouter(mockWindow)

      router.addRoute('/', () => {
        throw new Error('Dummy Error')
      })

      router.init()

      mockWindow.location.href = 'http://localhost:8080/#/'

      router.dispose()

      jest.runTimersToTime(1000)
    }).not.toThrow()
  })
})
