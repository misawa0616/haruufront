<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
@font-face {
  font-family: icon;
  src: url(../fonts/icon.woff) format("woff");
  font-weight: 400;
  font-style: normal;
}
html {
  font-size: 20px;
}
input {
  border: 0.1rem #aaa solid;
  border-radius: 0.2rem;
  height: 2.5rem;
  font-family: inherit;
  background-color: #fff;
  font-size: 1rem;
  width: 20rem;
}
button,
a {
  border: 0;
  cursor: pointer;
}
div,
h3,
p,
th,
section {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 1rem;
  font: inherit;
  vertical-align: baseline;
}
.common-block {
  margin-bottom: 2rem;
}
.common-table-block table {
  width: 100%;
}
.common-table-block table td {
  padding: 0.1rem 0.12rem 1.5rem;
}
.common-table-block table td .row-input {
  padding-top: 0.8rem;
  padding-left: 1rem;
}
.common-table-block table td .row-txt {
  padding-top: 1.4rem;
  padding-left: 1rem;
}
.common-table-block table th {
  text-align: left;
  padding-top: 1.4rem;
  padding-left: 4rem;
}
.err-msg {
  color: #d41414;
  font-size: 0.5rem;
}
input.error {
  background-color: #fff5f5;
  border-color: #ff8383;
}
.note-error-area .note-block {
  text-align: center;
  padding: 0.2rem;
  color: #fff;
  background-color: #ff8383;
}
.note-error-area .note-block .common-head4 {
  color: #fff;
  position: relative;
  display: inline-block;
  padding-left: 1.2rem;
}
.note-error-area .note-block .common-head4:before {
  font-family: "icon" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  text-transform: none;
  text-indent: 0;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\EA07";
  position: absolute;
  left: 0;
  top: 3px;
}
.side-page-link-list {
  text-align: center;
}
.side-page-link-list li {
  position: relative;
  display: inline-block;
  width: 10rem;
  margin-left: 0.2rem;
  vertical-align: bottom;
}
.side-page-link-list li .btn {
  transition: opacity 0.3s;
  width: 100%;
  padding: 1rem 0.1rem;
  color: #fff;
  border-radius: 4px;
  background-color: #aaa;
  font-size: 1rem;
}
.side-page-link-list li.next .btn {
  background-color: #1892e2;
  padding: 1.2rem 0.05rem;
}
.wrapp,
.wrapp-pc-only {
  margin: auto;
  width: 50rem;
}
.wrapp:after,
.wrapp-pc-only:after {
  display: block;
}
.side-page-link-list li .btn:hover {
  opacity: 0.5;
}
:focus {
  outline: none;
}
</style>
