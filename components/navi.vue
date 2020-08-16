<template>
  <div class="inline-1">
    <a
      role="button"
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
      @click="isOpen = !isOpen"
      v-bind:class="{'is-active': isOpen}"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{'is-active': isOpen}">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/">
          <strong>ホーム</strong>
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/g2_email_change">
          <strong>メールアドレス</strong>
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/g4_favorite">
          <strong>お気に入り</strong>
        </nuxt-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <nuxt-link class="button is-primary" to="/g1_login">
              <strong>サインアップ</strong>
            </nuxt-link>
            <nuxt-link class="button is-primary" to="/g1_login">
              <strong>ログイン</strong>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.navbar-end {
  margin-top: 100%;
}
.button.is-light:hover {
  background-color: #eee;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
a.navbar-item:hover {
  background-color: #fafafa;
  color: #3273dc;
}
.inline-1 {
  vertical-align: top;
  width: 20%;
  display: inline-block;
}
.button {
  background-color: #fff;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
  margin-bottom: 5%;
}
.button {
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  vertical-align: top;
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
}
.navbar-item {
  color: #4a4a4a;
  display: block;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
}
.navbar-menu.is-active {
  display: block;
}
.navbar-menu {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
  padding: 0.5rem 0;
  display: none;
}
.navbar-burger span {
  background-color: currentColor;
  display: block;
  height: 1px;
  left: calc(50% - 8px);
  position: absolute;
  -webkit-transform-origin: center;
  transform-origin: center;
  transition-duration: 86ms;
  transition-property: background-color, opacity, -webkit-transform;
  transition-property: background-color, opacity, transform;
  transition-property: background-color, opacity, transform, -webkit-transform;
  transition-timing-function: ease-out;
  width: 16px;
}
.navbar-burger {
  color: #4a4a4a;
  cursor: pointer;
  display: block;
  height: 3.25rem;
  position: relative;
  width: 3.25rem;
  /* margin-left: auto; */
}
.navbar-burger:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.navbar-burger span:nth-child(1) {
  top: calc(50% - 6px);
}
.navbar-burger.is-active span:nth-child(1) {
  -webkit-transform: translateY(5px) rotate(45deg);
  transform: translateY(5px) rotate(45deg);
}
.navbar-burger span:nth-child(2) {
  top: calc(50% - 1px);
}
.navbar-burger.is-active span:nth-child(2) {
  opacity: 0;
}
.navbar-burger span:nth-child(3) {
  top: calc(50% + 4px);
}
.navbar-burger.is-active span:nth-child(3) {
  -webkit-transform: translateY(-5px) rotate(-45deg);
  transform: translateY(-5px) rotate(-45deg);
}
</style>