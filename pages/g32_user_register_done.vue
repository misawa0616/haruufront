<template>
  <div class="user_register_done content">
    <navi />
    <div class="main">
      <section class="section-area">
        <div class="wrapp">
          <div class="common-block">
            <div class="common-table-block color-none">確認メールを送信しました。URLの期限は1日です。</div>
          </div>
          <ul class="side-page-link-list">
            <li class="next">
              <button v-on:click="clickNext" class="btn">
                <strong>ログイン</strong>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    clickNext() {
      this.$router.push("/g1_login");
    },
  },
};
</script>