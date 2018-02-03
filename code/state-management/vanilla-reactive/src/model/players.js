export default (state) => {
  if (!state) {
    throw new Error('state container is required')
  }

  if (!state.list) {
    state.list = []
  }

  const add = name => {
    state.list.push({name})
  }

  return {
    add
  }
}
