<template>
  <div class="favorite_register content">
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
                  <th>お気に入りのタイトル</th>
                  <td>
                    <div class="row-input">
                      <template v-if="favoriteTitleErrors">
                        <div v-for="(favoriteTitleError, key) in favoriteTitleErrors" :key="key">
                          <div class="err-msg">{{ favoriteTitleError }}</div>
                        </div>
                      </template>
                      <input
                        type="text"
                        name="favorite_title"
                        maxlength="128"
                        id="id_favorite_title"
                        v-model="favoriteTitle"
                        v-bind:class="{ error: favoriteTitleErrors }"
                        class="input-base favorite-input-title"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>お気に入りのURL</th>
                  <td>
                    <div class="row-input">
                      <template v-if="favoriteUrlErrors">
                        <div v-for="(favoriteUrl, key) in favoriteUrlErrors" :key="key">
                          <div class="err-msg">{{ favoriteUrl }}</div>
                        </div>
                      </template>
                      <input
                        type="text"
                        name="favorite_url"
                        placeholder="https://abc.def.ghi"
                        maxlength="128"
                        id="id_favorite_url"
                        v-model="favoriteUrl"
                        v-bind:class="{ error: favoriteUrlErrors }"
                        class="input-base favorite-input-url"
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
              <button v-on:click="clickNext" class="btn">登録</button>
            </li>
          </ul>
          <ul class="side-page-link-list sp-only">
            <li class="next">
              <button v-on:click="clickNext" class="btn">登録</button>
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
let url = "/api/v1/favorite_register/";

export default {
  middleware: ["user_auth"],
  name: "FavoriteRegister",
  data() {
    return {
      messages: "",
      favoriteTitleErrors: "",
      favoriteUrlErrors: "",
      favoriteTitle: "",
      favoriteUrl: "",
      isOpen: false,
      tags: this.$store.getters["user/getUser"].favoriteTag,
    };
  },
  methods: {
    clearError() {
      this.messages = "";
      this.favoriteTitleErrors = "";
      this.favoriteUrlErrors = "";
    },
    validateRequired() {
      var flag = true;
      if (!this.favoriteTitle || String(this.favoriteTitle).trim() == "") {
        this.favoriteTitleErrors = ["必須入力項目です。"];
        flag = false;
      }
      if (!this.favoriteUrl || String(this.favoriteUrl).trim() == "") {
        this.favoriteUrlErrors = ["必須入力項目です。"];
        flag = false;
      }
      return flag;
    },
    validate() {
      if (!this.validateRequired()) {
        return false;
      }
      return true;
    },
    toError: function (messages) {
      this.messages = messages;
      this.processing = false;
      window.scrollTo(0, 0);
    },
    clickBack() {
      this.$router.push("/g21_favorite");
    },
    clickNext() {
      this.clearError();
      if (!this.validate()) {
        this.toError(["エラーがあります。"]);
      } else {
        this.$axios
          .post(url, {
            favoriteTitle: this.favoriteTitle,
            favoriteUrl: this.favoriteUrl,
          })
          .then((res) => {
            this.$router.push("/g21_favorite");
          })
          .catch((e) => {
            if (e.response.data.favoriteUrl) {
              this.favoriteTitleErrors = e.response.data.favoriteTitle;
            }
            if (e.response.data.favoriteUrl) {
              this.favoriteUrlErrors = e.response.data.favoriteUrl;
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
.favorite-input-title {
  width: 10rem;
}
@media screen and (max-width: 767px) {
  .favorite-input-title {
    width: 50%;
  }
}
.favorite-input-url {
  width: 22rem;
}
@media screen and (max-width: 767px) {
  .favorite-input-url {
    width: 100%;
  }
}
</style>
