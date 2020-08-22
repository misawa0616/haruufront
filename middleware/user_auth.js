export default function ({ $axios, store, redirect, router }) {
    let url = "/api/v1/test/";
    return new Promise((resolve) => {
        console.log('Token ' + localStorage.getItem('token'))
        $axios.get(url)
            .then(function (res) {
                store.dispatch("user/updateUserAction", res.data);
                return resolve()
            })
            .catch(function (e) {
                store.dispatch("message/updateMessageAction", "有効なログイン情報を取得できませんでした。ログインしてください。");
                return redirect('/g1_login')
            })
    });
}