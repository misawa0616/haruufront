<template>
  <div class="container">
    <navi />
    <div class="main">
      <br />
      <strong>お気に入り</strong>
      <hr />
      <div class="tagfield">
        <div v-for="(tag, key) in tags" :key="key">
          <a
            class="button"
            v-bind:href="tag.url"
            v-bind:class="{ 'is-primary': tag.classId == 1,
          'is-secondary': tag.classId == 2,
          'is-tertiary' : tag.classId == 3,
          'is-quaternary' : tag.classId == 4}"
          >
            <strong>{{ tag.title }}</strong>
          </a>
        </div>
        <div>
          <button class="btna btn-primary rounded-circle p-0">+</button>
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
strong {
  font-size: 70%;
}
.btna {
  vertical-align: top;
  width: 2rem;
  height: 2rem;
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1.5rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-primary {
  color: #fff;
  background-color: #0001ff66;
}
.btn-primary:hover {
  background-color: rgb(0 84 255 / 40%);
}
.p-0 {
  padding: 0 !important;
}
.rounded-circle {
  border-radius: 50% !important;
}
.main {
  width: 60%;
  display: inline-block;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
a {
  text-decoration: none;
}
.button {
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  border-color: #dbdbdb;
  border-width: 1px;
  box-shadow: none;
  color: #363636;
  cursor: pointer;
  display: inline-flex;
  font-size: 100%;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  vertical-align: top;
  text-align: center;
  white-space: nowrap;
  margin-bottom: 5%;
}
.button.is-primary:hover {
  background-color: #00c4a7;
  border-color: transparent;
  color: #fff;
}
.button.is-primary {
  background-color: #00d1b2;
  border-color: transparent;
  color: #fff;
  margin-bottom: 10%;
}
.button.is-secondary:hover {
  background-color: #0096d1;
  border-color: transparent;
  color: #fff;
}
.button.is-secondary {
  background-color: #00a7d1;
  border-color: transparent;
  color: #fff;
  margin-bottom: 10%;
}
.button.is-tertiary:hover {
  background-color: #9dd100;
  border-color: transparent;
  color: #fff;
}
.button.is-tertiary {
  background-color: #abd100;
  border-color: transparent;
  color: #fff;
  margin-bottom: 10%;
}
.button.is-quaternary:hover {
  background-color: #d100c3;
  border-color: transparent;
  color: #fff;
}
.button.is-quaternary {
  background-color: #b500d1;
  border-color: transparent;
  color: #fff;
  margin-bottom: 10%;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.tagfield div {
  margin-left: 1%;
  width: 24%;
  display: inline-block;
}
</style>
