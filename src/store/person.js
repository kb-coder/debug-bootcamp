const state = {
  firstName: 'Karen',
  lastName: 'Smith',
  phone: '480-555-1212'
}

const mutations = {
  updatePerson (state, data) {
    state.firstName = data.firstName
    state.lastName = data.lastName
    state.phone = data.phone
  }
}

const actions = {
  updatePerson ({ commit }, data) {
    if (data) {
      commit('updatePerson', data)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
