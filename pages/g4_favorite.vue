<template>
  <div class="favorite">
    <navi />
    <div class="favorite-main">
      <br />
      <strong>お気に入り</strong>
      <hr />
      <div v-for="(tag, key) in tags" :key="key" class="favorite-tag">
        <a
          class="favorite-button__body"
          v-bind:href="tag.favoriteUrl"
          v-bind:class="{ 'favorite-button__primary': key%4 == 0,
          'favorite-button__secondary': key%4 == 1,
          'favorite-button__tertiary' : key%4 == 2,
          'favorite-button__quaternary' : key%4 == 3}"
        >
          <strong>{{ tag.favoriteTitle }}</strong>
        </a>
      </div>
      <div class="favorite-tag-add">
        <nuxt-link class="favorite-add__body favorite-add__color" to="/g5_favorite_register">+</nuxt-link>
      </div>
      <div>
        <div class="favorite-tag-add">
          <nuxt-link class="favorite-add__body favorite-add__color" to="/g6_favorite_editor">
            <div class="edit icon"></div>
          </nuxt-link>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["user_auth"],
  data() {
    return {
      tags: this.$store.getters["user/getUser"].favoriteTag,
    };
  },
};
</script>

<style>
.favorite-add__body {
  border-radius: 50% !important;
  display: inline-block;
  font-size: 1.5rem;
  height: 2rem;
  text-decoration: none;
  vertical-align: top;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
}
.favorite-add__color {
  background-color: #0001ff66;
  color: #fff;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.favorite-add__color:hover {
  background-color: rgb(0 84 255 / 40%);
}
.favorite-button__body {
  border: 1px solid transparent;
  border-radius: 4px;
  border-width: 1px;
  box-shadow: none;
  cursor: pointer;
  display: inline-flex;
  font-size: 100%;
  width: 80%;
  padding: 3%;
  margin-bottom: 10%;
  text-decoration: none;
  justify-content: center;
  align-items: center;
}
.favorite-button__primary {
  background-color: #00d1b2;
  border-color: transparent;
  color: #fff;
}
.favorite-button__primary:hover {
  background-color: #00c4a7;
  border-color: transparent;
  color: #fff;
}
.favorite-button__secondary {
  background-color: #00a7d1;
  border-color: transparent;
  color: #fff;
}
.favorite-button__secondary:hover {
  background-color: #0096d1;
  border-color: transparent;
  color: #fff;
}
.favorite-button__tertiary {
  background-color: #abd100;
  border-color: transparent;
  color: #fff;
}
.favorite-button__tertiary:hover {
  background-color: #9dd100;
  border-color: transparent;
  color: #fff;
}
.favorite-button__quaternary {
  background-color: #b500d1;
  border-color: transparent;
  color: #fff;
}
.favorite-button__quaternary:hover {
  background-color: #d100c3;
  border-color: transparent;
  color: #fff;
}
.favorite-main {
  width: 60%;
  display: inline-block;
}
.favorite-tag {
  margin-left: 1%;
  width: 24%;
  display: inline-block;
}
.favorite-tag-add {
  margin-left: 1%;
  width: 22%;
  display: inline-block;
}
</style>
