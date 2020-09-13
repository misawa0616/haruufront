export default ({ $axios, store }) => {
    console.log('middleware')
    return new Promise((resolve) => {
        $axios.get("/api/v1/test/")
            .then(function (res) {
                store.dispatch("user/updateUserAction", res.data);
                store.dispatch("user/updateIsLoginAction", true);
                return resolve()
            })
            .catch(function (e) {
                store.dispatch("user/updateIsLoginAction", false);
                return resolve()
            })
    });
}