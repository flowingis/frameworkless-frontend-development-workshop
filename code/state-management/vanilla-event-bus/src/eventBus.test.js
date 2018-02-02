import eventBusFactory from './eventBus'

describe('eventBus', () => {
  test('subscribers should be invoked on subscription with any event', () => {
    let dummyEvent = true
    const eventBus = eventBusFactory()

    eventBus.subscribe('dummyStateKey', (state, event, payload) => {
      dummyEvent = event
      return state
    })

    expect(dummyEvent).toBeFalsy()
  })

  test('subscribers should be invoked on publish, getting the right event and payload', () => {
    let dummyEvent
    let dummyPayload
    const eventBus = eventBusFactory()

    eventBus.subscribe('dummyStateKey', (state, event, payload) => {
      dummyEvent = event
      dummyPayload = payload

      return state
    })

    eventBus.publish('EVENT', 'PAYLOAD')

    expect(dummyEvent).toBe('EVENT')
    expect(dummyPayload).toBe('PAYLOAD')
  })

  test('subscribers receive an immutable state', () => {
    const eventBus = eventBusFactory()

    eventBus.subscribe('dummyStateKey', (state, event, payload) => {
      expect(() => {
        state.foo = 'bar'
      }).toThrow()

      return state
    })
  })

  test('subscribers must return always a state', () => {
    const eventBus = eventBusFactory()
    expect(() => {
      eventBus.subscribe('dummyStateKey', () => {})
    }).toThrow()
  })

  test('subscribers must update state', () => {
    const INITIAL_STATE = {
      dummy: {
        foo: 'bar'
      }
    }

    const eventBus = eventBusFactory(INITIAL_STATE)
    expect(eventBus.getState()).toEqual(INITIAL_STATE)

    eventBus.subscribe('dummy', () => {
      return {
        foo: 'baz'
      }
    })

    const EXPECTATION = {
      dummy: {
        foo: 'baz'
      }
    }

    expect(eventBus.getState()).toEqual(EXPECTATION)
  })

  test('subscribers should be able to unsubscribe', () => {
    let counter = 0
    const eventBus = eventBusFactory()

    const unsub = eventBus.subscribe('dummyStateKey', (state, event, payload) => {
      counter++
      return state
    })

    unsub()

    eventBus.publish('EVENT', 'PAYLOAD')

    expect(counter).toBe(1)
  })

  test('connectors should be invoked on connect', () => {
    let result
    const INITIAL_STATE = {
      dummy: {
        foo: 'bar'
      }
    }

    const eventBus = eventBusFactory(INITIAL_STATE)

    eventBus.connect(state => { result = state })

    expect(result).toEqual(INITIAL_STATE)
  })

  test('connectors should be invoked on publish', () => {
    let result
    let counter = 0

    const eventBus = eventBusFactory({})

    eventBus.connect(state => {
      result = state
      counter++
    })

    eventBus.publish('EVENT', 'PAYLOAD')

    expect(result).toEqual({})
    expect(counter).toBe(2)
  })

  test('connectors should receive an immutable state', () => {
    const eventBus = eventBusFactory({})

    eventBus.connect(state => {
      expect(() => {
        state.foo = 'bar'
      }).toThrow()
    })
  })

  test('connectors should be able to unsubscribe', () => {
    let counter = 0
    const eventBus = eventBusFactory({})

    const unsub = eventBus.connect(state => {
      counter++
    })

    unsub()

    eventBus.publish('EVENT', 'PAYLOAD')

    expect(counter).toBe(1)
  })
})
