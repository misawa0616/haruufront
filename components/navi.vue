<template>
  <div class="navbar-main" v-bind:class="{'is-active': isOpen}">
    <a
      class="navbar-burger__body navbar-burger__color"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
      @click="isOpen = !isOpen"
      v-bind:class="{'is-active': isOpen}"
    >
      <span class="navbar-burger-line__body navbar-burger-line__color" aria-hidden="true"></span>
      <span class="navbar-burger-line__body navbar-burger-line__color" aria-hidden="true"></span>
      <span class="navbar-burger-line__body navbar-burger-line__color" aria-hidden="true"></span>
    </a>
    <div
      id="navbarBasicExample"
      class="navbar-menu__body navbar-menu__color"
      v-bind:class="{'is-active': isOpen}"
    >
      <div class="navbar-start">
        <nuxt-link class="navbar-item__body navbar-item__color" to="/g4_favorite">
          <strong>ホーム</strong>
        </nuxt-link>
        <nuxt-link class="navbar-item__body navbar-item__color" to="/g2_email_change">
          <strong>メールアドレス</strong>
        </nuxt-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item__body navbar-item__color">
          <nuxt-link class="navbar-button__body navbar-button__primary" to="/g7_user_register">
            <strong>サインアップ</strong>
          </nuxt-link>
          <nuxt-link class="navbar-button__body navbar-button__primary" to="/g1_login">
            <strong>サインイン</strong>
          </nuxt-link>
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
.navbar-end {
  margin-top: 100%;
}
.navbar-main {
  vertical-align: top;
  width: 10rem;
  display: inline-block;
}
.navbar-main.is-active {
  z-index: 1;
}
.navbar-button__body {
  border: 1px solid transparent;
  border-radius: 4px;
  border-width: 1px;
  box-shadow: none;
  display: inline-flex;
  cursor: pointer;
  font-size: 100%;
  justify-content: flex-start;
  margin-bottom: 5%;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
}
.navbar-button__primary {
  background-color: #00d1b2;
  border-color: transparent;
  color: #fff;
}
.navbar-button__primary:hover {
  background-color: #00c4a7;
  color: #fff;
}
.navbar-item__body {
  display: block;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
  text-decoration: none;
}
.navbar-item__color {
  color: #4a4a4a;
}
.navbar-item__color:hover {
  background-color: #fafafa;
  color: #3273dc;
}
.navbar-menu__body {
  width: 100%;
  padding: 0.5rem 0;
  visibility: hidden;
}
.navbar-menu__body.is-active {
  visibility: visible;
}
.navbar-menu__color {
  background-color: #fff;
  box-shadow: 0 0px 16px rgba(50, 59, 50, 0.5);
}
.navbar-burger__body {
  cursor: pointer;
  display: block;
  height: 3.25rem;
  position: relative;
  width: 3.25rem;
}
.navbar-burger__body.is-active .navbar-burger-line__body:nth-child(1) {
  -webkit-transform: translateY(5px) rotate(45deg);
  transform: translateY(5px) rotate(45deg);
}
.navbar-burger__body.is-active .navbar-burger-line__body:nth-child(2) {
  opacity: 0;
}
.navbar-burger__body.is-active .navbar-burger-line__body:nth-child(3) {
  -webkit-transform: translateY(-5px) rotate(-45deg);
  transform: translateY(-5px) rotate(-45deg);
}
.navbar-burger__color {
  color: #4a4a4a;
  text-decoration: none;
}
.navbar-burger__color:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.navbar-burger-line__body {
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
.navbar-burger-line__body:nth-child(1) {
  top: calc(50% - 6px);
}
.navbar-burger-line__body:nth-child(2) {
  top: calc(50% - 1px);
}
.navbar-burger-line__body:nth-child(3) {
  top: calc(50% + 4px);
}
.navbar-burger-line__color {
  background-color: currentColor;
}
</style>