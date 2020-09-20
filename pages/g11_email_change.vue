<template>
  <div class="email_change">
    <navi />
    <div class="main">
      <section class="note-error-area">
        <template v-if="messages">
          <div class="wrapp">
            <div class="common-block note-block">
              <h3 class="common-head4">エラー</h3>
              <div v-for="(message, key) in messages" :key="key">
                <p>{{ message }}</p>
              </div>
            </div>
          </div>
        </template>
      </section>
      <section class="section-area">
        <div class="wrapp">
          <div class="common-block">
            <div class="common-table-block color-none">
              <table>
                <tr>
                  <th>現在のメールアドレス</th>
                  <td>
                    <div class="row-txt">{{ $store.getters["user/getUser"].email }}</div>
                  </td>
                </tr>
                <tr>
                  <th>変更後のメールアドレス</th>
                  <td>
                    <div class="row-input">
                      <template v-if="afterChangeEmailErrors">
                        <div
                          v-for="(afterChangeEmailError, key) in afterChangeEmailErrors"
                          :key="key"
                        >
                          <div class="err-msg">{{ afterChangeEmailError }}</div>
                        </div>
                      </template>
                      <input
                        type="text"
                        name="after_change_email"
                        placeholder="abcde@co.jp"
                        maxlength="128"
                        id="id_after_change_email"
                        v-model="afterChangeEmail"
                        v-bind:class="{ error: afterChangeEmailErrors }"
                        class="input-base"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>変更後のメールアドレス(確認用)</th>
                  <td>
                    <div class="row-input">
                      <template v-if="afterChangeEmailConfirmErrors">
                        <div
                          v-for="(afterChangeEmailConfirmError, key) in afterChangeEmailConfirmErrors"
                          :key="key"
                        >
                          <div class="err-msg">{{ afterChangeEmailConfirmError }}</div>
                        </div>
                      </template>
                      <input
                        type="text"
                        name="after_change_email_confirm"
                        placeholder="abcde@co.jp"
                        maxlength="128"
                        id="id_after_change_email_confirm"
                        v-model="afterChangeEmailConfirm"
                        v-bind:class="{ error: afterChangeEmailConfirmErrors }"
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
          <ul class="side-page-link-list pc-only">
            <li class="return">
              <button v-on:click="clickBack" class="btn">戻る</button>
            </li>
            <li class="next">
              <button v-on:click="clickNext" class="btn">変更</button>
            </li>
          </ul>
          <ul class="side-page-link-list sp-only">
            <li class="next">
              <button v-on:click="clickNext" class="btn">変更</button>
            </li>
            <li class="return">
              <button v-on:click="clickBack" class="btn">戻る</button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
let url = "/api/v1/change_email/";

export default {
  middleware: ["user_auth"],
  name: "EmailChangeConfirm",
  data() {
    return {
      messages: "",
      afterChangeEmailErrors: "",
      afterChangeEmailConfirmErrors: "",
      passwordErrors: "",
      afterChangeEmail: "",
      afterChangeEmailConfirm: "",
      password: "",
      isOpen: false,
    };
  },
  methods: {
    clickBack() {
      this.$router.push("/g21_favorite");
    },
    clearError() {
      this.messages = "";
      this.afterChangeEmailErrors = "";
      this.afterChangeEmailConfirmErrors = "";
      this.passwordErrors = "";
    },
    validateRequired() {
      var flag = true;
      if (
        !this.afterChangeEmail ||
        String(this.afterChangeEmail).trim() == ""
      ) {
        this.afterChangeEmailErrors = ["必須入力項目です。"];
        flag = false;
      }
      if (
        !this.afterChangeEmailConfirm ||
        String(this.afterChangeEmailConfirm).trim() == ""
      ) {
        this.afterChangeEmailConfirmErrors = ["必須入力項目です。"];
        flag = false;
      }
      if (!this.password || String(this.password).trim() == "") {
        this.passwordErrors = ["必須入力項目です。"];
        flag = false;
      }
      return flag;
    },
    validateEmailMatch() {
      var flag = true;
      if (this.afterChangeEmail != this.afterChangeEmailConfirm) {
        this.afterChangeEmailConfirmErrors = [
          "確認用メールアドレスが一致しません。",
        ];
        flag = false;
      }
      return flag;
    },
    validate() {
      if (!this.validateRequired()) {
        return false;
      }
      if (!this.validateEmailMatch()) {
        return false;
      }
      return true;
    },
    toError: function (messages) {
      this.messages = messages;
      this.processing = false;
      window.scrollTo(0, 0);
    },
    clickNext() {
      this.clearError();
      if (!this.validate()) {
        this.toError(["エラーがあります。"]);
      } else {
        this.$axios
          .post(url, {
            afterChangeEmail: this.afterChangeEmail,
          })
          .then((res) => {
            this.$router.push("/g12_email_change_done");
          })
          .catch((e) => {
            if (e.response.data.afterChangeEmail) {
              this.afterChangeEmailErrors = e.response.data.afterChangeEmail;
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
      }
    },
  },
};
</script>

<style scoped>
a {
  border-radius: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.email_change {
  display: flex;
}
</style>
