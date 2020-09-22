export default {
  // commit comes from vuex, pet is custom object we use
  // need to pass species also. Using payload for shorthand. this has payload.pet and payload.species
  addPet: ({ commit }, payload) => {
    // pass payload into appendPet mutation
    commit('appendPet', payload)
  }
}
