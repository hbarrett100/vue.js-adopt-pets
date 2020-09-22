export default {
  // first arg is state from vuex, second is payload
  appendPet: (state, { species, pet }) => {
    // push new pet on to cats or dogs array
    state[species].push(pet)
  }
}
