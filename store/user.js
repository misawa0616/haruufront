export const state = () => ({
    user: null,
    isLogin: false
})
export const getters = ({
    getUser(state) {
        return state.user
    },
    getIsLogin(state) {
        return state.isLogin
    }
})
export const mutations = {
    updateUser(state, payload) {
        state.user = payload
    },
    updateFavoriteTag(state, payload) {
        state.user.favoriteTag = payload
    },
    updateIsLogin(state, payload) {
        state.isLogin = payload
    },
}
export const actions = {
    updateUserAction(context, payload) {
        context.commit('updateUser', payload)
    },
    updateFavoriteTagAction(context, payload) {
        context.commit('updateFavoriteTag', payload)
    },
    updateIsLoginAction(context, payload) {
        context.commit('updateIsLogin', payload)
    },
}