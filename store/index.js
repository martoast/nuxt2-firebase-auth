
export const state = () => ({
  user: null,
})

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, {authUser, claims}) => {
    if (authUser) {  
      const {uid, email, emailVerified} = authUser
      state.user = {uid, email, emailVerified}
    }    
  },
}

export const getters = {
  user: (state) => state.user,
}