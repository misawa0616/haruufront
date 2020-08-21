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
    },
    updateFavoriteTag(state, payload) {
        state.user.favoriteTag = payload
    }
}
export const actions = {
    updateUserAction(context, payload) {
        context.commit('updateUser', payload)
    },
    updateFavoriteTagAction(context, payload) {
        context.commit('updateFavoriteTag', payload)
    },
}