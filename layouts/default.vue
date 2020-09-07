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
  min-height: 1100px;
}
@media screen and (max-width: 767px) {
  html {
    min-height: 0;
  }
}
.input-base {
  border: 0.1rem solid #aaa;
  border-radius: 0.2rem;
  height: 2.5rem;
  font-family: inherit;
  background-color: #fff;
  font-size: 1rem;
  width: 20rem;
}
@media screen and (max-width: 767px) {
  .input-base {
    border: 0.1rem #aaa solid;
    border-radius: 0.2rem;
    height: 1.5rem;
    font-family: inherit;
    background-color: #fff;
    font-size: 1rem;
    width: 100%;
  }
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
  padding: 0 0.12rem 1.5rem;
}
@media screen and (max-width: 767px) {
  .common-table-block table td {
    display: block;
  }
}
.common-table-block table td .row-input {
  padding-top: 0.75rem;
  padding-left: 1rem;
}
@media screen and (max-width: 767px) {
  .common-table-block table td .row-input {
    padding-left: 0;
  }
}
.common-table-block table td .row-input.error {
  padding-top: 0;
}
.common-table-block table td .row-txt {
  padding-top: 1.4rem;
  padding-left: 1rem;
}
.common-table-block table th {
  text-align: left;
  padding-top: 1.4rem;
  width: 11rem;
}
@media screen and (max-width: 767px) {
  .common-table-block table th {
    display: block;
    width: 100%;
  }
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
@media screen and (max-width: 767px) {
  .pc-only {
    display: none !important;
  }
}
.side-page-link-list {
  text-align: center;
}
@media screen and (max-width: 767px) {
  .side-page-link-list {
    text-align: left;
    margin-left: -40px;
  }
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
.side-page-link-list li .btn:hover {
  opacity: 0.5;
}
.side-page-link-list li.next .btn {
  background-color: #1892e2;
  padding: 1.2rem 0.05rem;
}
@media screen and (max-width: 767px) {
  .side-page-link-list li.next .btn {
    padding: 0.5rem 0.05rem;
  }
}
@media screen and (max-width: 767px) {
  .side-page-link-list li.next {
    width: 60%;
  }
}
@media screen and (max-width: 767px) {
  .side-page-link-list li.return .btn {
    padding: 0.5rem 0.05rem;
  }
}
@media screen and (max-width: 767px) {
  .side-page-link-list li.return {
    margin-top: 5%;
    width: 60%;
  }
}
@media screen and (min-width: 768px) {
  .sp-only {
    display: none !important;
  }
}
.wrapp,
.wrapp-pc-only {
  margin: auto;
  width: 40rem;
  margin-left: calc(50% - 500px);
}
@media screen and (max-width: 1200px) {
  .wrapp,
  .wrapp-pc-only {
    margin-left: 0;
  }
}
@media screen and (max-width: 767px) {
  .wrapp,
  .wrapp-pc-only {
    width: calc(100% + 100px);
    margin-left: -135px;
  }
}
.wrapp:after,
.wrapp-pc-only:after {
  display: block;
}
:focus {
  outline: none;
}
.edit.icon {
  color: white;
  position: absolute;
  margin-left: 0;
  margin-top: 0px;
  width: 0.7rem;
  height: 0.2rem;
  border-radius: 1px;
  border: solid 1px currentColor;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.edit.icon:before {
  content: "";
  position: absolute;
  left: -12px;
  top: -1px;
  width: 0px;
  height: 0.1rem;
  border-left: solid 5px transparent;
  border-right: solid 5px currentColor;
  border-top: solid 2px transparent;
  border-bottom: solid 2px transparent;
}
.main {
  display: inline-block;
  flex: 1;
}
.remove.icon {
  display: flex;
  justify-content: center;
  color: white;
}
.remove.icon:before {
  content: "";
  position: absolute;
  width: 15px;
  height: 1px;
  background-color: currentColor;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.remove.icon.is-active:before {
  transform: none;
}
.remove.icon:after {
  content: "";
  position: absolute;
  width: 15px;
  height: 1px;
  background-color: currentColor;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.remove.icon.is-active:after {
  transform: none;
}
</style>
