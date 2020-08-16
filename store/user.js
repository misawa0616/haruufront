export const state = () => ({
    user: null
})
export const getters = ({
    getUser(state) {
        return state.user
    }
})
export const mutations = {
    updateUser(state, payload) {
        state.user = payload
    }
}
export const actions = {
    updateUserAction(context, payload) {
        context.commit('updateUser', payload)
    },
}