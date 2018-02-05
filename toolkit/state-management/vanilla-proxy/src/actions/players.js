export default {
  add: (state, name) => {
    state.players = [...state.players, {name}]
  }
}
