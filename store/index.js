import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      navState: false
    },
    mutations: {
      toggleActive: (state) => {
        return state.navState = ! state.navState;
    },
      navStateTrue (state) {
        state.navState = true;
      },
      navStateFalse (state) {
        state.navState = false;
      }
    }
  })
}


export default createStore