<template>
  <div class="g6_favorite_editor">
    <navi />
    <div class="main">
      <section class="note-error-area">
        <template v-if="messages">
          <div class="wrapp">
            <div class="common-block note-block">
              <h3 class="common-head4">エラー</h3>
              <div v-for="(message, index) in messages" :key="index">
                <p>{{ message }}</p>
              </div>
            </div>
          </div>
        </template>
      </section>
      <section class="section-area">
        <div class="wrapp-pc-only">
          <div class="common-block">
            <div class="common-table-block color-none">
              <table class="pc-only">
                <tr v-for="(tag, index) in tags" :key="index">
                  <th
                    class="g6-th"
                    v-bind:class="{ 'error': tagsErrors[index].favoriteTitleErrors }"
                  >
                    <div class="row-input">
                      <template v-if="tagsErrors[index].favoriteTitleErrors">
                        <div
                          v-for="(favoriteTitleError, index) in tagsErrors[index].favoriteTitleErrors"
                          :key="index"
                        >
                          <div class="err-msg">{{ favoriteTitleError }}</div>
                        </div>
                      </template>
                      <input
                        type="text"
                        name="favorite_title"
                        maxlength="128"
                        v-model="tags[index].favoriteTitle"
                        v-bind:class="{ error: tagsErrors[index].favoriteTitleErrors, 'is-delete': tags[index].deleteTag }"
                        class="input-base favorite-input-title"
                        autocomplete="off"
                      />
                    </div>
                  </th>
                  <td>
                    <div
                      class="row-input"
                      v-bind:class="{ 'error': tagsErrors[index].favoriteUrlErrors }"
                    >
                      <template v-if="tagsErrors[index].favoriteUrlErrors">
                        <div
                          v-for="(favoriteUrlError, index) in tagsErrors[index].favoriteUrlErrors"
                          :key="index"
                        >
                          <div class="err-msg">{{ favoriteUrlError }}</div>
                        </div>
                      </template>
                      <input
                        type="text"
                        name="favorite_url"
                        maxlength="128"
                        v-model="tags[index].favoriteUrl"
                        v-bind:class="{ error: tagsErrors[index].favoriteUrlErrors, 'is-delete': tags[index].deleteTag}"
                        class="input-base favorite-input-url"
                        autocomplete="off"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="row-input">
                      <div
                        class="favorite-delete__body favorite-delete__color"
                        @click="deleteFlag(index)"
                      >
                        <div
                          class="remove icon"
                          v-bind:class="{'is-active': tags[index].deleteTag}"
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
              <table v-for="(tag, index) in tags" :key="index" class="sp-only">
                <tr valign="bottom">
                  <td class="favorite-cells">
                    <div
                      class="favorite-delete__body favorite-delete__color"
                      @click="deleteFlag(index)"
                    >
                      <div class="remove icon" v-bind:class="{'is-active': tags[index].deleteTag}"></div>
                    </div>
                  </td>
                  <td
                    class="g6-th favorite-cells"
                    v-bind:class="{ 'error': tagsErrors[index].favoriteTitleErrors }"
                  >
                    <div class="row-input">
                      <template v-if="tagsErrors[index].favoriteTitleErrors">
                        <div
                          v-for="(favoriteTitleError, index) in tagsErrors[index].favoriteTitleErrors"
                          :key="index"
                        >
                          <div class="err-msg">{{ favoriteTitleError }}</div>
                        </div>
                      </template>
                      <input
                        type="text"
                        name="favorite_title"
                        maxlength="128"
                        v-model="tags[index].favoriteTitle"
                        v-bind:class="{ error: tagsErrors[index].favoriteTitleErrors, 'is-delete': tags[index].deleteTag }"
                        class="input-base favorite-input-title"
                        autocomplete="off"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" class="favorite-cells">
                    <div
                      class="row-input"
                      v-bind:class="{ 'error': tagsErrors[index].favoriteUrlErrors }"
                    >
                      <template v-if="tagsErrors[index].favoriteUrlErrors">
                        <div
                          v-for="(favoriteUrlError, index) in tagsErrors[index].favoriteUrlErrors"
                          :key="index"
                        >
                          <div class="err-msg">{{ favoriteUrlError }}</div>
                        </div>
                      </template>
                      <input
                        type="text"
                        name="favorite_url"
                        maxlength="128"
                        v-model="tags[index].favoriteUrl"
                        v-bind:class="{ error: tagsErrors[index].favoriteUrlErrors, 'is-delete': tags[index].deleteTag}"
                        class="input-base favorite-input-url"
                        autocomplete="off"
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
              <button v-on:click="clickNext" class="btn">保存</button>
            </li>
          </ul>
          <ul class="side-page-link-list sp-only">
            <li class="next">
              <button v-on:click="clickNext" class="btn">保存</button>
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
let url = "/api/v1/favorite_editor/";

export default {
  middleware: ["user_auth"],
  name: "FavoriteRegister",
  data() {
    return {
      messages: "",
      isOpen: false,
      tags: [],
      tagsErrors: [],
    };
  },
  mounted() {
    this.tags = JSON.parse(
      JSON.stringify(this.$store.getters["user/getUser"].favoriteTag)
    );
    for (const [index, tag] of this.tags.entries()) {
      this.tagsErrors[index] = {
        favoriteTitleErrors: "",
        favoriteUrlErrors: "",
      };
    }
  },
  methods: {
    deleteFlag(index) {
      this.$set(this.tags[index], "deleteTag", !this.tags[index].deleteTag);
      this.$forceUpdate();
    },
    clearError() {
      this.messages = "";
      for (const [index, tag] of this.tags.entries()) {
        this.tagsErrors[index] = {
          favoriteTitleErrors: "",
          favoriteUrlErrors: "",
        };
      }
    },
    validateRequired() {
      var flag = true;
      for (const [index, student] of this.tags.entries()) {
        if (
          !this.tags[index].favoriteTitle ||
          String(this.tags[index].favoriteTitle).trim() == ""
        ) {
          this.tagsErrors[index].favoriteTitleErrors = ["必須入力項目です。"];
          flag = false;
        }
        if (
          !this.tags[index].favoriteUrl ||
          String(this.tags[index].favoriteUrl).trim() == ""
        ) {
          this.tagsErrors[index].favoriteUrlErrors = ["必須入力項目です。"];
          flag = false;
        }
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
      this.$router.push("/g4_favorite");
    },
    clickNext() {
      this.clearError();
      if (!this.validate()) {
        this.toError(["エラーがあります。"]);
      } else {
        this.$axios
          .post(url, this.tags)
          .then((res) => {
            this.$router.push("/g4_favorite");
          })
          .catch((e) => {
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
.g6_favorite_editor {
  display: flex;
}
a {
  border-radius: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.favorite-delete__body {
  border-radius: 50% !important;
  font-size: 1.5rem;
  height: 2rem;
  text-decoration: none;
  vertical-align: top;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.favorite-delete__color {
  background-color: #0001ff66;
  color: #fff;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.favorite-delete__color:hover {
  background-color: rgb(0 84 255 / 40%);
}
.favorite-input-title {
  width: 10rem;
}
@media screen and (max-width: 767px) {
  .favorite-input-title {
    width: 100%;
  }
}
.favorite-input-url {
  width: 22rem;
}
@media screen and (max-width: 767px) {
  .favorite-input-url {
    width: calc(100%);
    margin-bottom: 10%;
  }
}
.favorite-input-title.is-delete {
  background-color: #747272;
  border-color: #747272;
}
.favorite-input-url.is-delete {
  background-color: #747272;
  border-color: #747272;
}
.g6-th {
  padding-top: 0.75rem;
}
.g6-th.error {
  padding-top: 0;
}
@media screen and (max-width: 767px) {
  .favorite-cells {
    display: table-cell;
  }
}
@media screen and (max-width: 767px) {
  .common-table-block table td {
    padding: 0;
  }
}
</style>
