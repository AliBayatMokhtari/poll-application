const state = {
  polls: [
    {
      id: 1,
      creator: "John Doe",
      question: "Do you like cats?",
      options: [
        {
          id: 1,
          value: "Yes",
          counter: 0
        },
        {
          id: 2,
          value: "No",
          counter: 0
        }
      ]
    },
    {
      id: 2,
      creator: "Danny Smith",
      question: "Are you male or female?",
      options: [
        {
          id: 1,
          value: "Male",
          counter: 0
        },
        {
          id: 2,
          value: "Female",
          counter: 0
        }
      ]
    },
    {
      id: 3,
      creator: "Nasim Bagheri",
      question: "Did you eat lunch?",
      options: [
        {
          id: 1,
          value: "Yes I did",
          counter: 0
        },
        {
          id: 2,
          value: "No I didn't",
          counter: 0
        }
      ]
    },
    {
      id: 4,
      creator: "Ali Bayat Mokhtari",
      question: "Which one is better?",
      options: [
        {
          id: 1,
          value: "React js",
          counter: 0
        },
        {
          id: 2,
          value: "Vue js",
          counter: 0
        }
      ]
    },
    {
      id: 5,
      creator: "Nima Shokri",
      question: "Filter or Filtir?",
      options: [
        {
          id: 1,
          value: "Filter",
          counter: 0
        },
        {
          id: 2,
          value: "Filtir",
          counter: 0
        }
      ]
    }
  ]
}

const mutations = {
  updatePoll(state, payload) {
    const poll = state.polls[payload.pollId - 1]
    poll.options[payload.optionId - 1].counter++
  }
}

const actions = {
  updatePoll({ commit }, payload) {
    commit('updatePoll', payload)
  }
}

const getters = {
  polls: () => state.polls
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
