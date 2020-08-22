export default ({ $axios }) => {
    // リクエストログ
    $axios.onRequest((config) => {
        config.headers.common['Authorization'] = 'Token ' + localStorage.getItem('token');
        config.headers.common['Content-Type'] = 'application/json';
    })
    // レスポンスログ
    $axios.onResponse((config) => {
    })
    // エラーログ
    $axios.onError((e) => {
    })
}