export default ({ store, redirect }) => {
    return new Promise((resolve) => {
        if (store.getters['user/getIsLogin']) {
            return resolve()
        } else {
            store.dispatch("message/updateMessageAction", "有効なログイン情報を取得できませんでした。ログインしてください。");
            return redirect('g1_login')
        }
    });
}