export const state = () => ({
    message: null
})
export const getters = ({
    getMessage(state) {
        return state.message
    }
})
export const mutations = {
    updateMessage(state, payload) {
        state.message = payload
    }
}
export const actions = {
    updateMessageAction(context, payload) {
        context.commit('updateMessage', payload)
    },
}