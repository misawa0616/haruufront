<template>
  <div class="login">
    <navi />
    <div class="login-main">
      <div style="text-align:center;">
        <Logo />
        <p>
          <strong>このサイトはNuxtJS + DRFで作成されています。</strong>
        </p>
      </div>
      <br />
      <br />
      <section class="note-error-area">
        <template v-if="$store.state.message.message">
          <div class="wrapp">
            <div class="common-block note-block">
              <h3 class="common-head4">エラー</h3>
              <div v-for="(messagevalue, key) in messages" :key="key">
                <p>{{ messagevalue }}</p>
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="messages">
          <div class="wrapp">
            <div class="common-block note-block">
              <h3 class="common-head4">エラー</h3>
              <div v-for="(messagevalue, key) in messages" :key="key">
                <p>{{ messagevalue }}</p>
              </div>
            </div>
          </div>
        </template>
      </section>
      <section class="section-area">
        <div class="wrapp-pc-only">
          <div class="common-block">
            <div class="common-table-block color-none">
              <table>
                <tr>
                  <th>メールアドレス</th>
                  <td>
                    <div class="row-input">
                      <template v-if="emailErrors">
                        <div v-for="(emailError, key) in emailErrors" :key="key">
                          <div class="err-msg">{{ emailError }}</div>
                        </div>
                      </template>
                      <input
                        type="text"
                        name="email"
                        placeholder="abcde@co.jp"
                        maxlength="128"
                        id="email"
                        v-model="email"
                        v-bind:class="{ error: emailErrors }"
                        class="input-base"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>パスワード</th>
                  <td>
                    <div class="row-input">
                      <template v-if="passwordErrors">
                        <div v-for="(passwordError, key) in passwordErrors" :key="key">
                          <div class="err-msg">{{ passwordError }}</div>
                        </div>
                      </template>
                      <input
                        type="password"
                        name="password"
                        maxlength="128"
                        id="id_password"
                        v-model="password"
                        v-bind:class="{ error: passwordErrors }"
                        class="input-base"
                      />
                    </div>
                  </td>
                </tr>
              </table>
            </div>
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
let url = "http://54.226.195.187/api/v1/rest_auth/login/";

export default {
  data: function () {
    return {
      messages: "",
      emailErrors: "",
      passwordErrors: "",
      email: "",
      password: "",
    };
  },
  methods: {
    clearError() {
      this.messages = "";
      this.emailErrors = "";
      this.passwordErrors = "";
    },
    validate() {
      var flag = true;
      if (!this.email || String(this.email).trim() == "") {
        this.emailErrors = ["必須入力項目です。"];
        flag = false;
      }
      if (!this.password || String(this.password).trim() == "") {
        this.passwordErrors = ["必須入力項目です。"];
        flag = false;
      }
      return flag;
    },
    toError: function (messages) {
      this.messages = messages;
      this.processing = false;
      window.scrollTo(0, 0);
    },
    clickNext() {
      this.clearError();
      if (this.validate()) {
        axios
          .post(url, {
            email: this.email,
            password: this.password,
          })
          .then((res) => {
            localStorage.setItem("token", res.data.key);
            this.$router.push("/g4_favorite");
          })
          .catch((e) => {
            if (e.response.data.email) {
              this.emailErrors = e.response.data.email;
            }
            if (e.response.data.password) {
              this.passwordErrors = e.response.data.password;
            }
            if (e.response.data.nonFieldErrors) {
              this.toError(e.response.data.nonFieldErrors);
            } else {
              this.toError(["エラーがあります"]);
            }
          });
      } else {
        this.toError(["エラーがあります。"]);
      }
    },
  },
  beforeMount() {
    if (this.$store.getters["message/getMessage"]) {
      this.messages = [this.$store.getters["message/getMessage"]];
      this.$store.dispatch("message/updateMessageAction", "");
      console.log("Mount");
    }
  },
  beforeUpdate() {
    if (this.$store.getters["message/getMessage"]) {
      this.messages = [this.$store.getters["message/getMessage"]];
      this.$store.dispatch("message/updateMessageAction", "");
      console.log("Update");
    }
  },
};
</script>
<style scoped>
.login-main {
  width: 60%;
  display: inline-block;
}
</style>