<template>
  <div class="email_change_complete">
    <navi />
    <div class="main">
      <section class="section-area">
        <div class="wrapp-pc-only">
          <div class="common-block">
            <div class="common-table-block color-none">{{ messages }}</div>
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
const axiosBase = require("axios");
const axios = axiosBase.create({
  headers: {
    "Content-Type": "application/json",
  },
});
export default {
  data: function () {
    return {
      messages: "",
    };
  },
  methods: {
    clickNext() {
      this.$router.push("/g1_login");
    },
  },
  beforeMount() {
    axios
      .get(
        "https://favoritetag.xyz/api/v1/confirm_change_email/" +
          this.$route.query.token
      )
      .then((res) => {
        this.messages = res.data.detail;
      })
      .catch((e) => {
        this.messages = e.response.data.detail;
      });
  },
};
</script>
<style>
.email_change_complete {
  display: flex;
}
</style>