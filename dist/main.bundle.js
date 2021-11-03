/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,800);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: #f6f5f7;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  height: 100vh;\r\n  /* margin: -20px 0 50px; */\r\n}\r\n\r\nh1 {\r\n  font-weight: bold;\r\n  margin: 0;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\np {\r\n  font-size: 14px;\r\n  font-weight: 100;\r\n  line-height: 20px;\r\n  letter-spacing: 0.5px;\r\n  margin: 20px 0 30px;\r\n}\r\n\r\nspan {\r\n  font-size: 12px;\r\n}\r\n\r\na {\r\n  color: #333;\r\n  font-size: 14px;\r\n  text-decoration: none;\r\n  margin: 15px 0;\r\n}\r\n\r\nbutton {\r\n  border-radius: 20px;\r\n  border: 1px solid #ff4b2b;\r\n  background-color: #ff4b2b;\r\n  color: #ffffff;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  padding: 12px 45px;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  transition: transform 80ms ease-in;\r\n}\r\n\r\nbutton:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\nbutton:focus {\r\n  outline: none;\r\n}\r\n\r\nbutton.ghost {\r\n  background-color: transparent;\r\n  border-color: #ffffff;\r\n}\r\n\r\nform {\r\n  background-color: #ffffff;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  padding: 0 50px;\r\n  height: 100%;\r\n  text-align: center;\r\n}\r\n\r\ninput {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 12px 15px;\r\n  margin: 8px 0;\r\n  width: 100%;\r\n}\r\n\r\n.container {\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  position: relative;\r\n  overflow: hidden;\r\n  width: 768px;\r\n  max-width: 100%;\r\n  min-height: 480px;\r\n}\r\n\r\n.form-container {\r\n  position: absolute;\r\n  top: 0;\r\n  height: 100%;\r\n  transition: all 0.6s ease-in-out;\r\n}\r\n\r\n.sign-in-container {\r\n  left: 0;\r\n  width: 50%;\r\n  z-index: 2;\r\n}\r\n\r\n.user-in-container {\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 3;\r\n}\r\n\r\n.container.right-panel-active .sign-in-container {\r\n  transform: translateX(100%);\r\n}\r\n\r\n.sign-up-container {\r\n  left: 0;\r\n  width: 50%;\r\n  opacity: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.container.right-panel-active .sign-up-container {\r\n  transform: translateX(100%);\r\n  opacity: 1;\r\n  z-index: 5;\r\n  animation: show 0.6s;\r\n}\r\n\r\n@keyframes show {\r\n  0%,\r\n  49.99% {\r\n    opacity: 0;\r\n    z-index: 1;\r\n  }\r\n\r\n  50%,\r\n  100% {\r\n    opacity: 1;\r\n    z-index: 5;\r\n  }\r\n}\r\n\r\n.overlay-container {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  width: 50%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  transition: transform 0.6s ease-in-out;\r\n  z-index: 100;\r\n}\r\n\r\n.container.right-panel-active .overlay-container {\r\n  transform: translateX(-100%);\r\n}\r\n\r\n.overlay {\r\n  background: #ff416c;\r\n  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);\r\n  background: linear-gradient(to right, #ff4b2b, #ff416c);\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: 0 0;\r\n  color: #ffffff;\r\n  position: relative;\r\n  left: -100%;\r\n  height: 100%;\r\n  width: 200%;\r\n  transform: translateX(0);\r\n  transition: transform 0.6s ease-in-out;\r\n}\r\n\r\n.container.right-panel-active .overlay {\r\n  transform: translateX(50%);\r\n}\r\n\r\n.overlay-panel {\r\n  position: absolute;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  padding: 0 40px;\r\n  text-align: center;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 50%;\r\n  transform: translateX(0);\r\n  transition: transform 0.6s ease-in-out;\r\n}\r\n\r\n.overlay-left {\r\n  transform: translateX(-20%);\r\n}\r\n\r\n.container.right-panel-active .overlay-left {\r\n  transform: translateX(0);\r\n}\r\n\r\n.overlay-right {\r\n  right: 0;\r\n  transform: translateX(0);\r\n}\r\n\r\n.container.right-panel-active .overlay-right {\r\n  transform: translateX(20%);\r\n}\r\n\r\n.social-container {\r\n  margin: 10px 0;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.social-container a {\r\n  border: 1px solid #dddddd;\r\n  border-radius: 50%;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 5px;\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\nfooter {\r\n  background-color: #222;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  bottom: 0;\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  text-align: center;\r\n  z-index: 999;\r\n}\r\n\r\nfooter p {\r\n  margin: 10px 0;\r\n}\r\n\r\nfooter i {\r\n  color: red;\r\n}\r\n\r\nfooter a {\r\n  color: #3c97bf;\r\n  text-decoration: none;\r\n}\r\n\r\n/* from here it will be the button */\r\n\r\n.me {\r\n  background-image: url(https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://demo.accesspressthemes.com/wordpress-plugins/smart-logo-showcase/wp-content/uploads/2017/01/smart-logo-showcase-list-layout.png);\r\n  background-size: cover;\r\n}\r\n\r\n/* .second-container {\r\n  align-items: center;\r\n  background: #f1eef1;\r\n  border: 1px solid #d2d1d4;\r\n\r\n  font-family: sans-serif;\r\n  font-weight: 600;\r\n  display: flex;\r\n  height: 360px;\r\n  justify-content: center;\r\n  width: 360px;\r\n} */\r\n\r\n.email {\r\n  background: #ff4b2b;\r\n  border-radius: 20px;\r\n  color: white;\r\n  height: 40px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  width: 162px;\r\n  -webkit-tap-highlight-color: transparent;\r\n  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1),\r\n    height 300ms cubic-bezier(0.4, 0, 0.2, 1),\r\n    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),\r\n    border-radius 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n.email:not(.expand) {\r\n  cursor: pointer;\r\n}\r\n.email:not(.expand):hover {\r\n  background: #ff5234;\r\n}\r\n.from {\r\n  position: absolute;\r\n  transition: opacity 200ms 100ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n.from-contents {\r\n  display: flex;\r\n  flex-direction: row;\r\n  transform-origin: 0 0;\r\n  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n.to {\r\n  opacity: 0;\r\n  position: absolute;\r\n  transition: opacity 100ms cubic-bezier(0.4, 0, 1, 1);\r\n}\r\n.to-contents {\r\n  transform: scale(0.55);\r\n  transform-origin: 0 0;\r\n  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n.avatar {\r\n  border-radius: 12px;\r\n  height: 24px;\r\n  margin-left: 30px;\r\n  margin-top: 8px;\r\n  position: relative;\r\n  width: 24px;\r\n}\r\n.name {\r\n  font-size: 14px;\r\n  line-height: 40px;\r\n  margin-left: 5px;\r\n}\r\n.top {\r\n  background: #ff4b2b;\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 70px;\r\n  transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n  width: 300px;\r\n}\r\n.avatar-large {\r\n  border-radius: 21px;\r\n  height: 42px;\r\n  margin-left: 12px;\r\n  position: relative;\r\n  top: 14px;\r\n  width: 42px;\r\n}\r\n.name-large {\r\n  color: white;\r\n  font-size: 16px;\r\n  line-height: 70px;\r\n  margin-left: 20px;\r\n}\r\n.x-touch {\r\n  align-items: center;\r\n  align-self: center;\r\n  cursor: pointer;\r\n  display: flex;\r\n  height: 50px;\r\n  justify-content: center;\r\n  margin-left: auto;\r\n  width: 50px;\r\n}\r\n.x {\r\n  background: #ba87f9;\r\n  border-radius: 10px;\r\n  height: 20px;\r\n  position: relative;\r\n  width: 20px;\r\n}\r\n.x-touch:hover .x {\r\n  background: #cb9afb;\r\n}\r\n.line1 {\r\n  background: #6422eb;\r\n  height: 12px;\r\n  position: absolute;\r\n  transform: translateX(9px) translateY(4px) rotate(45deg);\r\n  width: 2px;\r\n}\r\n.line2 {\r\n  background: #6422eb;\r\n  height: 12px;\r\n  position: absolute;\r\n  transform: translateX(9px) translateY(4px) rotate(-45deg);\r\n  width: 2px;\r\n}\r\n.bottom {\r\n  background: #fff;\r\n  color: #444247;\r\n  font-size: 14px;\r\n  height: 200px;\r\n  padding-top: 5px;\r\n  width: 300px;\r\n}\r\n.row {\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 60px;\r\n  background-color: white;\r\n}\r\n.twitter {\r\n  margin-left: 16px;\r\n  height: 30px;\r\n  position: relative;\r\n  top: 0px;\r\n  width: 30px;\r\n}\r\n.medium {\r\n  height: 30px;\r\n  margin-left: 16px;\r\n  position: relative;\r\n  width: 30px;\r\n}\r\n.link {\r\n  margin-left: 16px;\r\n}\r\n.link a {\r\n  color: #444247;\r\n  text-decoration: none;\r\n}\r\n.link a:hover {\r\n  color: #777579;\r\n}\r\n.email.expand {\r\n  z-index: 999;\r\n  border-radius: 6px;\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.16);\r\n  height: 200px;\r\n  width: 300px;\r\n  overflow: overlay;\r\n  position: absolute;\r\n  top: 100px;\r\n  right: 250px;\r\n}\r\n.expand .from {\r\n  opacity: 0;\r\n  transition: opacity 100ms cubic-bezier(0.4, 0, 1, 1);\r\n}\r\n.expand .from-contents {\r\n  transform: scale(1.91);\r\n}\r\n.expand .to {\r\n  opacity: 1;\r\n  transition: opacity 200ms 100ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n.expand .to-contents {\r\n  transform: scale(1);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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,wDAAwD;AAC1D;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,oDAAoD;AACtD;AACA;EACE,sBAAsB;EACtB,qBAAqB;EACrB,wDAAwD;AAC1D;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,qDAAqD;EACrD,YAAY;AACd;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;AACA;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,iBAAiB;EACjB,WAAW;AACb;AACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,wDAAwD;EACxD,UAAU;AACZ;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,yDAAyD;EACzD,UAAU;AACZ;AACA;EACE,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,WAAW;AACb;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,iBAAiB;AACnB;AACA;EACE,cAAc;EACd,qBAAqB;AACvB;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,yEAAyE;EACzE,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,YAAY;AACd;AACA;EACE,UAAU;EACV,oDAAoD;AACtD;AACA;EACE,sBAAsB;AACxB;AACA;EACE,UAAU;EACV,0DAA0D;AAC5D;AACA;EACE,mBAAmB;AACrB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,800\");\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: #f6f5f7;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  height: 100vh;\r\n  /* margin: -20px 0 50px; */\r\n}\r\n\r\nh1 {\r\n  font-weight: bold;\r\n  margin: 0;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\np {\r\n  font-size: 14px;\r\n  font-weight: 100;\r\n  line-height: 20px;\r\n  letter-spacing: 0.5px;\r\n  margin: 20px 0 30px;\r\n}\r\n\r\nspan {\r\n  font-size: 12px;\r\n}\r\n\r\na {\r\n  color: #333;\r\n  font-size: 14px;\r\n  text-decoration: none;\r\n  margin: 15px 0;\r\n}\r\n\r\nbutton {\r\n  border-radius: 20px;\r\n  border: 1px solid #ff4b2b;\r\n  background-color: #ff4b2b;\r\n  color: #ffffff;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  padding: 12px 45px;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  transition: transform 80ms ease-in;\r\n}\r\n\r\nbutton:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\nbutton:focus {\r\n  outline: none;\r\n}\r\n\r\nbutton.ghost {\r\n  background-color: transparent;\r\n  border-color: #ffffff;\r\n}\r\n\r\nform {\r\n  background-color: #ffffff;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  padding: 0 50px;\r\n  height: 100%;\r\n  text-align: center;\r\n}\r\n\r\ninput {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 12px 15px;\r\n  margin: 8px 0;\r\n  width: 100%;\r\n}\r\n\r\n.container {\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  position: relative;\r\n  overflow: hidden;\r\n  width: 768px;\r\n  max-width: 100%;\r\n  min-height: 480px;\r\n}\r\n\r\n.form-container {\r\n  position: absolute;\r\n  top: 0;\r\n  height: 100%;\r\n  transition: all 0.6s ease-in-out;\r\n}\r\n\r\n.sign-in-container {\r\n  left: 0;\r\n  width: 50%;\r\n  z-index: 2;\r\n}\r\n\r\n.user-in-container {\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 3;\r\n}\r\n\r\n.container.right-panel-active .sign-in-container {\r\n  transform: translateX(100%);\r\n}\r\n\r\n.sign-up-container {\r\n  left: 0;\r\n  width: 50%;\r\n  opacity: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.container.right-panel-active .sign-up-container {\r\n  transform: translateX(100%);\r\n  opacity: 1;\r\n  z-index: 5;\r\n  animation: show 0.6s;\r\n}\r\n\r\n@keyframes show {\r\n  0%,\r\n  49.99% {\r\n    opacity: 0;\r\n    z-index: 1;\r\n  }\r\n\r\n  50%,\r\n  100% {\r\n    opacity: 1;\r\n    z-index: 5;\r\n  }\r\n}\r\n\r\n.overlay-container {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  width: 50%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  transition: transform 0.6s ease-in-out;\r\n  z-index: 100;\r\n}\r\n\r\n.container.right-panel-active .overlay-container {\r\n  transform: translateX(-100%);\r\n}\r\n\r\n.overlay {\r\n  background: #ff416c;\r\n  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);\r\n  background: linear-gradient(to right, #ff4b2b, #ff416c);\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: 0 0;\r\n  color: #ffffff;\r\n  position: relative;\r\n  left: -100%;\r\n  height: 100%;\r\n  width: 200%;\r\n  transform: translateX(0);\r\n  transition: transform 0.6s ease-in-out;\r\n}\r\n\r\n.container.right-panel-active .overlay {\r\n  transform: translateX(50%);\r\n}\r\n\r\n.overlay-panel {\r\n  position: absolute;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  padding: 0 40px;\r\n  text-align: center;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 50%;\r\n  transform: translateX(0);\r\n  transition: transform 0.6s ease-in-out;\r\n}\r\n\r\n.overlay-left {\r\n  transform: translateX(-20%);\r\n}\r\n\r\n.container.right-panel-active .overlay-left {\r\n  transform: translateX(0);\r\n}\r\n\r\n.overlay-right {\r\n  right: 0;\r\n  transform: translateX(0);\r\n}\r\n\r\n.container.right-panel-active .overlay-right {\r\n  transform: translateX(20%);\r\n}\r\n\r\n.social-container {\r\n  margin: 10px 0;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.social-container a {\r\n  border: 1px solid #dddddd;\r\n  border-radius: 50%;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 5px;\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\nfooter {\r\n  background-color: #222;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  bottom: 0;\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  text-align: center;\r\n  z-index: 999;\r\n}\r\n\r\nfooter p {\r\n  margin: 10px 0;\r\n}\r\n\r\nfooter i {\r\n  color: red;\r\n}\r\n\r\nfooter a {\r\n  color: #3c97bf;\r\n  text-decoration: none;\r\n}\r\n\r\n/* from here it will be the button */\r\n\r\n.me {\r\n  background-image: url(https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://demo.accesspressthemes.com/wordpress-plugins/smart-logo-showcase/wp-content/uploads/2017/01/smart-logo-showcase-list-layout.png);\r\n  background-size: cover;\r\n}\r\n\r\n/* .second-container {\r\n  align-items: center;\r\n  background: #f1eef1;\r\n  border: 1px solid #d2d1d4;\r\n\r\n  font-family: sans-serif;\r\n  font-weight: 600;\r\n  display: flex;\r\n  height: 360px;\r\n  justify-content: center;\r\n  width: 360px;\r\n} */\r\n\r\n.email {\r\n  background: #ff4b2b;\r\n  border-radius: 20px;\r\n  color: white;\r\n  height: 40px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  width: 162px;\r\n  -webkit-tap-highlight-color: transparent;\r\n  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1),\r\n    height 300ms cubic-bezier(0.4, 0, 0.2, 1),\r\n    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),\r\n    border-radius 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n.email:not(.expand) {\r\n  cursor: pointer;\r\n}\r\n.email:not(.expand):hover {\r\n  background: #ff5234;\r\n}\r\n.from {\r\n  position: absolute;\r\n  transition: opacity 200ms 100ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n.from-contents {\r\n  display: flex;\r\n  flex-direction: row;\r\n  transform-origin: 0 0;\r\n  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n.to {\r\n  opacity: 0;\r\n  position: absolute;\r\n  transition: opacity 100ms cubic-bezier(0.4, 0, 1, 1);\r\n}\r\n.to-contents {\r\n  transform: scale(0.55);\r\n  transform-origin: 0 0;\r\n  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n.avatar {\r\n  border-radius: 12px;\r\n  height: 24px;\r\n  margin-left: 30px;\r\n  margin-top: 8px;\r\n  position: relative;\r\n  width: 24px;\r\n}\r\n.name {\r\n  font-size: 14px;\r\n  line-height: 40px;\r\n  margin-left: 5px;\r\n}\r\n.top {\r\n  background: #ff4b2b;\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 70px;\r\n  transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);\r\n  width: 300px;\r\n}\r\n.avatar-large {\r\n  border-radius: 21px;\r\n  height: 42px;\r\n  margin-left: 12px;\r\n  position: relative;\r\n  top: 14px;\r\n  width: 42px;\r\n}\r\n.name-large {\r\n  color: white;\r\n  font-size: 16px;\r\n  line-height: 70px;\r\n  margin-left: 20px;\r\n}\r\n.x-touch {\r\n  align-items: center;\r\n  align-self: center;\r\n  cursor: pointer;\r\n  display: flex;\r\n  height: 50px;\r\n  justify-content: center;\r\n  margin-left: auto;\r\n  width: 50px;\r\n}\r\n.x {\r\n  background: #ba87f9;\r\n  border-radius: 10px;\r\n  height: 20px;\r\n  position: relative;\r\n  width: 20px;\r\n}\r\n.x-touch:hover .x {\r\n  background: #cb9afb;\r\n}\r\n.line1 {\r\n  background: #6422eb;\r\n  height: 12px;\r\n  position: absolute;\r\n  transform: translateX(9px) translateY(4px) rotate(45deg);\r\n  width: 2px;\r\n}\r\n.line2 {\r\n  background: #6422eb;\r\n  height: 12px;\r\n  position: absolute;\r\n  transform: translateX(9px) translateY(4px) rotate(-45deg);\r\n  width: 2px;\r\n}\r\n.bottom {\r\n  background: #fff;\r\n  color: #444247;\r\n  font-size: 14px;\r\n  height: 200px;\r\n  padding-top: 5px;\r\n  width: 300px;\r\n}\r\n.row {\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 60px;\r\n  background-color: white;\r\n}\r\n.twitter {\r\n  margin-left: 16px;\r\n  height: 30px;\r\n  position: relative;\r\n  top: 0px;\r\n  width: 30px;\r\n}\r\n.medium {\r\n  height: 30px;\r\n  margin-left: 16px;\r\n  position: relative;\r\n  width: 30px;\r\n}\r\n.link {\r\n  margin-left: 16px;\r\n}\r\n.link a {\r\n  color: #444247;\r\n  text-decoration: none;\r\n}\r\n.link a:hover {\r\n  color: #777579;\r\n}\r\n.email.expand {\r\n  z-index: 999;\r\n  border-radius: 6px;\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.16);\r\n  height: 200px;\r\n  width: 300px;\r\n  overflow: overlay;\r\n  position: absolute;\r\n  top: 100px;\r\n  right: 250px;\r\n}\r\n.expand .from {\r\n  opacity: 0;\r\n  transition: opacity 100ms cubic-bezier(0.4, 0, 1, 1);\r\n}\r\n.expand .from-contents {\r\n  transform: scale(1.91);\r\n}\r\n.expand .to {\r\n  opacity: 1;\r\n  transition: opacity 200ms 100ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n.expand .to-contents {\r\n  transform: scale(1);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

const signUpDiv = document.getElementById("signup-div");
const loginDiv = document.getElementById("login-div");
const overlayDiv = document.getElementById("overlay-div");
const userInDiv = document.getElementById("user-in");
const guestButton = document.getElementById("guest");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function showUserPanel(username) {
  signUpDiv.style.display = "none";
  loginDiv.style.display = "none";
  overlayDiv.style.display = "none";
  userInDiv.style.display = "block";
  document.getElementById("guestName").textContent = username;
  showUserPanerlButtons();
}
function showUserPanerlButtons() {
  document.getElementById("sign-up-user-in").style.display = "none";
  document.getElementById("show-list-user-in").style.display = "block";
  document.getElementById("logout-user-in").style.display = "block";
  document.getElementById("logout-user-in").addEventListener("click", (e) => {
    resetInputFields();
    hideUserPanel();
    hideUserPanerlButtons();
  });
}

function hideUserPanel() {
  signUpDiv.style.display = "block";
  loginDiv.style.display = "block";
  overlayDiv.style.display = "block";
  userInDiv.style.display = "none";
}

function hideUserPanerlButtons() {
  document.getElementById("sign-up-user-in").style.display = "block";
  document.getElementById("show-list-user-in").style.display = "none";
  document.getElementById("logout-user-in").style.display = "none";
  document.getElementById("sign-up-user-in").addEventListener("click", (e) => {
    e.preventDefault();
    resetInputFields();
    hideUserPanel();
    hideUserPanerlButtons();
    container.classList.add("right-panel-active");
  });
}

function resetInputFields() {
  document.getElementById("shortenUrl").value = "";
  document.getElementById("originalUrl").value = "";
  document.getElementById("login-email").value = "";
  document.getElementById("login-password").value = "";
}

guestButton.addEventListener("click", (e) => {
  e.preventDefault();
  showUserPanel("Guest");
  hideUserPanerlButtons();
});

/*
  minimum functionality requirement - Geust Page will be able to shorten a url
*/
// ids: convert, originalUrl, shortenUrl
document.getElementById("convert").addEventListener("click", async (e) => {
  e.preventDefault();
  const currentUser = document.getElementById("guestName").textContent;
  const originalUrl = document.getElementById("originalUrl");
  const shortenUrl = "http://localhost:3000/api/shorturl ";
  if (originalUrl.value.length > 8) {
    try {
      const shortenOriginalUrl = await axios({
        method: "POST",
        url: shortenUrl,
        data: {
          url: originalUrl.value,
          username: currentUser,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      showShortUrl(shortenOriginalUrl);
    } catch {
      alert("Try again later");
    }
  } else {
    alert("url is not valid");
  }
});

function showShortUrl(ResponseJson) {
  document.getElementById(
    "shortenUrl"
  ).value = `http://localhost:3000/cybr/${ResponseJson.data.shorturl}`;
}

/*
  Login a user
*/

document.getElementById("login").addEventListener("click", async (e) => {
  e.preventDefault();
  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;
  const loginUrl = "http://localhost:3000/user/login";
  if (loginEmail.length > 6 && loginPassword.length > 0) {
    try {
      const loginAttempt = await axios({
        method: "POST",
        url: loginUrl,
        data: {
          email: loginEmail,
          password: loginPassword,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (loginAttempt.status === 200) {
        showUserPanel(loginAttempt.data.username);
      }
    } catch (e) {
      alert("something wrong with the email or password");
    }
  } else {
    alert("please enter a valid email");
  }
});

/*
  sign up a user
*/
document.getElementById("sign-up").addEventListener("click", async (e) => {
  const signUpName = document.getElementById("sign-up-name").value;
  const signUpEmail = document.getElementById("sign-up-email").value;
  const signUpPassword = document.getElementById("sign-up-password").value;
  const signUpUrl = "http://localhost:3000/user/sign-up";
  if (
    signUpEmail.length > 6 &&
    signUpPassword.length > 0 &&
    signUpName.length > 0
  ) {
    try {
      const signUpAttempt = await axios({
        method: "POST",
        url: signUpUrl,
        data: {
          name: signUpName,
          email: signUpEmail,
          password: signUpPassword,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (signUpAttempt.status === 200) {
        alert(signUpAttempt.data.message);
        container.classList.remove("right-panel-active");
      }
    } catch (e) {
      alert("something wrong with the email or password");
    }
  } else {
    alert("please enter valid information");
  }
});

/*
  user is able to see all his shorten urls
*/

function createRow(link) {
  const parentDivBottom = document.getElementById("bottom");
  // create the row
  const row = document.createElement("div");
  row.classList.add("row");
  const rowLink = document.createElement("div");
  rowLink.classList.add("link");
  const newlink = document.createElement("a");
  newlink.setAttribute("href", link);
  newlink.textContent = link;

  // append all together
  rowLink.append(newlink);
  row.append(rowLink);
  parentDivBottom.append(row);
}

document
  .querySelector(".second-container")
  .addEventListener("click", async (e) => {
    const currentUser = document.getElementById("guestName").textContent;
    const allShortUrls = "http://localhost:3000/user/all-short-urls";
    const getUserData = await axios({
      method: "GET",
      url: allShortUrls,
      data: {},
      headers: {
        "Content-Type": "application/json",
        username: currentUser,
      },
    });
    if (getUserData.data.length > 0) {
      for (let url of getUserData.data) {
        createRow(`http://localhost:3000/${url.shorturl}`);
      }
    } else {
      alert("no previous links");
    }
  });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkJBQTZCLEtBQUssaUJBQWlCLGlCQUFpQixpRUFBaUUsS0FBSywwQkFBMEIsMEJBQTBCLEtBQUssV0FBVyxpRkFBaUYsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsT0FBTyxlQUFlLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxN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QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLDJDQUEyQyxhQUFhO0FBQ3hEO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDgwMCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjZmNWY3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIC8qIG1hcmdpbjogLTIwcHggMCA1MHB4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gIG1hcmdpbjogMjBweCAwIDMwcHg7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbWFyZ2luOiAxNXB4IDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmNGIyYjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjRiMmI7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogMTJweCA0NXB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uZ2hvc3Qge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMCA1MHB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMTJweCAxNXB4O1xcclxcbiAgbWFyZ2luOiA4cHggMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aWR0aDogNzY4cHg7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiA0ODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1jb250YWluZXIge1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1pbi1jb250YWluZXIge1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAzO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAuc2lnbi1pbi1jb250YWluZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1jb250YWluZXIge1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLnNpZ24tdXAtY29udGFpbmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB6LWluZGV4OiA1O1xcclxcbiAgYW5pbWF0aW9uOiBzaG93IDAuNnM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2hvdyB7XFxyXFxuICAwJSxcXHJcXG4gIDQ5Ljk5JSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUsXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWNvbnRhaW5lciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmY0MTZjO1xcclxcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjRiMmIsICNmZjQxNmMpO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY0YjJiLCAjZmY0MTZjKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiAtMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAyMDAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheS1wYW5lbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDAgNDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktbGVmdCB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWxlZnQge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheS1yaWdodCB7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmlnaHQge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1jb250YWluZXIgYSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgNXB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIHtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgaSB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgYSB7XFxyXFxuICBjb2xvcjogIzNjOTdiZjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZnJvbSBoZXJlIGl0IHdpbGwgYmUgdGhlIGJ1dHRvbiAqL1xcclxcblxcclxcbi5tZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zcC1hby5zaG9ydHBpeGVsLmFpL2NsaWVudC90b19hdXRvLHFfZ2xvc3N5LHJldF9pbWcvaHR0cHM6Ly9kZW1vLmFjY2Vzc3ByZXNzdGhlbWVzLmNvbS93b3JkcHJlc3MtcGx1Z2lucy9zbWFydC1sb2dvLXNob3djYXNlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAxL3NtYXJ0LWxvZ28tc2hvd2Nhc2UtbGlzdC1sYXlvdXQucG5nKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIC5zZWNvbmQtY29udGFpbmVyIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjFlZWYxO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDFkNDtcXHJcXG5cXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDM2MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzYwcHg7XFxyXFxufSAqL1xcclxcblxcclxcbi5lbWFpbCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmY0YjJiO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTYycHg7XFxyXFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxcXHJcXG4gICAgaGVpZ2h0IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXFxyXFxuICAgIGJveC1zaGFkb3cgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxcXHJcXG4gICAgYm9yZGVyLXJhZGl1cyAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcclxcbn1cXHJcXG4uZW1haWw6bm90KC5leHBhbmQpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmVtYWlsOm5vdCguZXhwYW5kKTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmY1MjM0O1xcclxcbn1cXHJcXG4uZnJvbSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIDEwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xcclxcbn1cXHJcXG4uZnJvbS1jb250ZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcclxcbn1cXHJcXG4udG8ge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSk7XFxyXFxufVxcclxcbi50by1jb250ZW50cyB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNTUpO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcbi5hdmF0YXIge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogOHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxufVxcclxcbi5uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuLnRvcCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmY0YjJiO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuLmF2YXRhci1sYXJnZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMXB4O1xcclxcbiAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDE0cHg7XFxyXFxuICB3aWR0aDogNDJweDtcXHJcXG59XFxyXFxuLm5hbWUtbGFyZ2Uge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG59XFxyXFxuLngtdG91Y2gge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcbi54IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNiYTg3Zjk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcbi54LXRvdWNoOmhvdmVyIC54IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNjYjlhZmI7XFxyXFxufVxcclxcbi5saW5lMSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNjQyMmViO1xcclxcbiAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgdHJhbnNsYXRlWSg0cHgpIHJvdGF0ZSg0NWRlZyk7XFxyXFxuICB3aWR0aDogMnB4O1xcclxcbn1cXHJcXG4ubGluZTIge1xcclxcbiAgYmFja2dyb3VuZDogIzY0MjJlYjtcXHJcXG4gIGhlaWdodDogMTJweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5cHgpIHRyYW5zbGF0ZVkoNHB4KSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIHdpZHRoOiAycHg7XFxyXFxufVxcclxcbi5ib3R0b20ge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjNDQ0MjQ3O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxufVxcclxcbi5yb3cge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi50d2l0dGVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAwcHg7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG59XFxyXFxuLm1lZGl1bSB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTZweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbn1cXHJcXG4ubGluayB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTZweDtcXHJcXG59XFxyXFxuLmxpbmsgYSB7XFxyXFxuICBjb2xvcjogIzQ0NDI0NztcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLmxpbmsgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzc3NzU3OTtcXHJcXG59XFxyXFxuLmVtYWlsLmV4cGFuZCB7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIG92ZXJmbG93OiBvdmVybGF5O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMDBweDtcXHJcXG4gIHJpZ2h0OiAyNTBweDtcXHJcXG59XFxyXFxuLmV4cGFuZCAuZnJvbSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcXHJcXG59XFxyXFxuLmV4cGFuZCAuZnJvbS1jb250ZW50cyB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuOTEpO1xcclxcbn1cXHJcXG4uZXhwYW5kIC50byB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyAxMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcXHJcXG59XFxyXFxuLmV4cGFuZCAudG8tY29udGVudHMge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsY0FBYztB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O0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix3REFBd0Q7RUFDeEQsVUFBVTtBQUNaO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5REFBeUQ7RUFDekQsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUVBQXlFO0VBQ3pFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysb0RBQW9EO0FBQ3REO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFVBQVU7RUFDViwwREFBMEQ7QUFDNUQ7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDgwMFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjZmNWY3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIC8qIG1hcmdpbjogLTIwcHggMCA1MHB4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gIG1hcmdpbjogMjBweCAwIDMwcHg7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbWFyZ2luOiAxNXB4IDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmNGIyYjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjRiMmI7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogMTJweCA0NXB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uZ2hvc3Qge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMCA1MHB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMTJweCAxNXB4O1xcclxcbiAgbWFyZ2luOiA4cHggMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aWR0aDogNzY4cHg7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiA0ODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1jb250YWluZXIge1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1pbi1jb250YWluZXIge1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAzO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAuc2lnbi1pbi1jb250YWluZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1jb250YWluZXIge1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLnNpZ24tdXAtY29udGFpbmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB6LWluZGV4OiA1O1xcclxcbiAgYW5pbWF0aW9uOiBzaG93IDAuNnM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2hvdyB7XFxyXFxuICAwJSxcXHJcXG4gIDQ5Ljk5JSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUsXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWNvbnRhaW5lciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmY0MTZjO1xcclxcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjRiMmIsICNmZjQxNmMpO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY0YjJiLCAjZmY0MTZjKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiAtMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAyMDAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheS1wYW5lbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDAgNDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktbGVmdCB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWxlZnQge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheS1yaWdodCB7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmlnaHQge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1jb250YWluZXIgYSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgNXB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIHtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgaSB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgYSB7XFxyXFxuICBjb2xvcjogIzNjOTdiZjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZnJvbSBoZXJlIGl0IHdpbGwgYmUgdGhlIGJ1dHRvbiAqL1xcclxcblxcclxcbi5tZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zcC1hby5zaG9ydHBpeGVsLmFpL2NsaWVudC90b19hdXRvLHFfZ2xvc3N5LHJldF9pbWcvaHR0cHM6Ly9kZW1vLmFjY2Vzc3ByZXNzdGhlbWVzLmNvbS93b3JkcHJlc3MtcGx1Z2lucy9zbWFydC1sb2dvLXNob3djYXNlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAxL3NtYXJ0LWxvZ28tc2hvd2Nhc2UtbGlzdC1sYXlvdXQucG5nKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIC5zZWNvbmQtY29udGFpbmVyIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjFlZWYxO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDFkNDtcXHJcXG5cXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDM2MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzYwcHg7XFxyXFxufSAqL1xcclxcblxcclxcbi5lbWFpbCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmY0YjJiO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTYycHg7XFxyXFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxcXHJcXG4gICAgaGVpZ2h0IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXFxyXFxuICAgIGJveC1zaGFkb3cgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxcXHJcXG4gICAgYm9yZGVyLXJhZGl1cyAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcclxcbn1cXHJcXG4uZW1haWw6bm90KC5leHBhbmQpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmVtYWlsOm5vdCguZXhwYW5kKTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmY1MjM0O1xcclxcbn1cXHJcXG4uZnJvbSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIDEwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xcclxcbn1cXHJcXG4uZnJvbS1jb250ZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcclxcbn1cXHJcXG4udG8ge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSk7XFxyXFxufVxcclxcbi50by1jb250ZW50cyB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNTUpO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcbi5hdmF0YXIge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogOHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxufVxcclxcbi5uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuLnRvcCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmY0YjJiO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuLmF2YXRhci1sYXJnZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMXB4O1xcclxcbiAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDE0cHg7XFxyXFxuICB3aWR0aDogNDJweDtcXHJcXG59XFxyXFxuLm5hbWUtbGFyZ2Uge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG59XFxyXFxuLngtdG91Y2gge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcbi54IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNiYTg3Zjk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcbi54LXRvdWNoOmhvdmVyIC54IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNjYjlhZmI7XFxyXFxufVxcclxcbi5saW5lMSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNjQyMmViO1xcclxcbiAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgdHJhbnNsYXRlWSg0cHgpIHJvdGF0ZSg0NWRlZyk7XFxyXFxuICB3aWR0aDogMnB4O1xcclxcbn1cXHJcXG4ubGluZTIge1xcclxcbiAgYmFja2dyb3VuZDogIzY0MjJlYjtcXHJcXG4gIGhlaWdodDogMTJweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5cHgpIHRyYW5zbGF0ZVkoNHB4KSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIHdpZHRoOiAycHg7XFxyXFxufVxcclxcbi5ib3R0b20ge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjNDQ0MjQ3O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxufVxcclxcbi5yb3cge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi50d2l0dGVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAwcHg7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG59XFxyXFxuLm1lZGl1bSB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTZweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbn1cXHJcXG4ubGluayB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTZweDtcXHJcXG59XFxyXFxuLmxpbmsgYSB7XFxyXFxuICBjb2xvcjogIzQ0NDI0NztcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLmxpbmsgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzc3NzU3OTtcXHJcXG59XFxyXFxuLmVtYWlsLmV4cGFuZCB7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIG92ZXJmbG93OiBvdmVybGF5O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMDBweDtcXHJcXG4gIHJpZ2h0OiAyNTBweDtcXHJcXG59XFxyXFxuLmV4cGFuZCAuZnJvbSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcXHJcXG59XFxyXFxuLmV4cGFuZCAuZnJvbS1jb250ZW50cyB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuOTEpO1xcclxcbn1cXHJcXG4uZXhwYW5kIC50byB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyAxMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcXHJcXG59XFxyXFxuLmV4cGFuZCAudG8tY29udGVudHMge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcclxuXHJcbmNvbnN0IHNpZ25VcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnblVwXCIpO1xyXG5jb25zdCBzaWduSW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25JblwiKTtcclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XHJcblxyXG5jb25zdCBzaWduVXBEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ251cC1kaXZcIik7XHJcbmNvbnN0IGxvZ2luRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1kaXZcIik7XHJcbmNvbnN0IG92ZXJsYXlEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXktZGl2XCIpO1xyXG5jb25zdCB1c2VySW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItaW5cIik7XHJcbmNvbnN0IGd1ZXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJndWVzdFwiKTtcclxuXHJcbnNpZ25VcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmlnaHQtcGFuZWwtYWN0aXZlXCIpO1xyXG59KTtcclxuXHJcbnNpZ25JbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwicmlnaHQtcGFuZWwtYWN0aXZlXCIpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNob3dVc2VyUGFuZWwodXNlcm5hbWUpIHtcclxuICBzaWduVXBEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIGxvZ2luRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBvdmVybGF5RGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB1c2VySW5EaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1ZXN0TmFtZVwiKS50ZXh0Q29udGVudCA9IHVzZXJuYW1lO1xyXG4gIHNob3dVc2VyUGFuZXJsQnV0dG9ucygpO1xyXG59XHJcbmZ1bmN0aW9uIHNob3dVc2VyUGFuZXJsQnV0dG9ucygpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ24tdXAtdXNlci1pblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93LWxpc3QtdXNlci1pblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb3V0LXVzZXItaW5cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ291dC11c2VyLWluXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgcmVzZXRJbnB1dEZpZWxkcygpO1xyXG4gICAgaGlkZVVzZXJQYW5lbCgpO1xyXG4gICAgaGlkZVVzZXJQYW5lcmxCdXR0b25zKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVVc2VyUGFuZWwoKSB7XHJcbiAgc2lnblVwRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgbG9naW5EaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBvdmVybGF5RGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgdXNlckluRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVVzZXJQYW5lcmxCdXR0b25zKCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbi11cC11c2VyLWluXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93LWxpc3QtdXNlci1pblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvdXQtdXNlci1pblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduLXVwLXVzZXItaW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICByZXNldElucHV0RmllbGRzKCk7XHJcbiAgICBoaWRlVXNlclBhbmVsKCk7XHJcbiAgICBoaWRlVXNlclBhbmVybEJ1dHRvbnMoKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmlnaHQtcGFuZWwtYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldElucHV0RmllbGRzKCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvcnRlblVybFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmlnaW5hbFVybFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1lbWFpbFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1wYXNzd29yZFwiKS52YWx1ZSA9IFwiXCI7XHJcbn1cclxuXHJcbmd1ZXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBzaG93VXNlclBhbmVsKFwiR3Vlc3RcIik7XHJcbiAgaGlkZVVzZXJQYW5lcmxCdXR0b25zKCk7XHJcbn0pO1xyXG5cclxuLypcclxuICBtaW5pbXVtIGZ1bmN0aW9uYWxpdHkgcmVxdWlyZW1lbnQgLSBHZXVzdCBQYWdlIHdpbGwgYmUgYWJsZSB0byBzaG9ydGVuIGEgdXJsXHJcbiovXHJcbi8vIGlkczogY29udmVydCwgb3JpZ2luYWxVcmwsIHNob3J0ZW5VcmxcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb252ZXJ0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBjdXJyZW50VXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3Vlc3ROYW1lXCIpLnRleHRDb250ZW50O1xyXG4gIGNvbnN0IG9yaWdpbmFsVXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmlnaW5hbFVybFwiKTtcclxuICBjb25zdCBzaG9ydGVuVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Nob3J0dXJsIFwiO1xyXG4gIGlmIChvcmlnaW5hbFVybC52YWx1ZS5sZW5ndGggPiA4KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzaG9ydGVuT3JpZ2luYWxVcmwgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IHNob3J0ZW5VcmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgdXJsOiBvcmlnaW5hbFVybC52YWx1ZSxcclxuICAgICAgICAgIHVzZXJuYW1lOiBjdXJyZW50VXNlcixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzaG93U2hvcnRVcmwoc2hvcnRlbk9yaWdpbmFsVXJsKTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICBhbGVydChcIlRyeSBhZ2FpbiBsYXRlclwiKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgYWxlcnQoXCJ1cmwgaXMgbm90IHZhbGlkXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBzaG93U2hvcnRVcmwoUmVzcG9uc2VKc29uKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcInNob3J0ZW5VcmxcIlxyXG4gICkudmFsdWUgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2N5YnIvJHtSZXNwb25zZUpzb24uZGF0YS5zaG9ydHVybH1gO1xyXG59XHJcblxyXG4vKlxyXG4gIExvZ2luIGEgdXNlclxyXG4qL1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgbG9naW5FbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tZW1haWxcIikudmFsdWU7XHJcbiAgY29uc3QgbG9naW5QYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tcGFzc3dvcmRcIikudmFsdWU7XHJcbiAgY29uc3QgbG9naW5VcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyL2xvZ2luXCI7XHJcbiAgaWYgKGxvZ2luRW1haWwubGVuZ3RoID4gNiAmJiBsb2dpblBhc3N3b3JkLmxlbmd0aCA+IDApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGxvZ2luQXR0ZW1wdCA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogbG9naW5VcmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgZW1haWw6IGxvZ2luRW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZDogbG9naW5QYXNzd29yZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAobG9naW5BdHRlbXB0LnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgc2hvd1VzZXJQYW5lbChsb2dpbkF0dGVtcHQuZGF0YS51c2VybmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgYWxlcnQoXCJzb21ldGhpbmcgd3Jvbmcgd2l0aCB0aGUgZW1haWwgb3IgcGFzc3dvcmRcIik7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGFsZXJ0KFwicGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWxcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qXHJcbiAgc2lnbiB1cCBhIHVzZXJcclxuKi9cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduLXVwXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xyXG4gIGNvbnN0IHNpZ25VcE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ24tdXAtbmFtZVwiKS52YWx1ZTtcclxuICBjb25zdCBzaWduVXBFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbi11cC1lbWFpbFwiKS52YWx1ZTtcclxuICBjb25zdCBzaWduVXBQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbi11cC1wYXNzd29yZFwiKS52YWx1ZTtcclxuICBjb25zdCBzaWduVXBVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyL3NpZ24tdXBcIjtcclxuICBpZiAoXHJcbiAgICBzaWduVXBFbWFpbC5sZW5ndGggPiA2ICYmXHJcbiAgICBzaWduVXBQYXNzd29yZC5sZW5ndGggPiAwICYmXHJcbiAgICBzaWduVXBOYW1lLmxlbmd0aCA+IDBcclxuICApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNpZ25VcEF0dGVtcHQgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IHNpZ25VcFVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBuYW1lOiBzaWduVXBOYW1lLFxyXG4gICAgICAgICAgZW1haWw6IHNpZ25VcEVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHNpZ25VcFBhc3N3b3JkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChzaWduVXBBdHRlbXB0LnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgYWxlcnQoc2lnblVwQXR0ZW1wdC5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwicmlnaHQtcGFuZWwtYWN0aXZlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGFsZXJ0KFwic29tZXRoaW5nIHdyb25nIHdpdGggdGhlIGVtYWlsIG9yIHBhc3N3b3JkXCIpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBhbGVydChcInBsZWFzZSBlbnRlciB2YWxpZCBpbmZvcm1hdGlvblwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLypcclxuICB1c2VyIGlzIGFibGUgdG8gc2VlIGFsbCBoaXMgc2hvcnRlbiB1cmxzXHJcbiovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSb3cobGluaykge1xyXG4gIGNvbnN0IHBhcmVudERpdkJvdHRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm90dG9tXCIpO1xyXG4gIC8vIGNyZWF0ZSB0aGUgcm93XHJcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICBjb25zdCByb3dMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByb3dMaW5rLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIpO1xyXG4gIGNvbnN0IG5ld2xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBuZXdsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgbGluayk7XHJcbiAgbmV3bGluay50ZXh0Q29udGVudCA9IGxpbms7XHJcblxyXG4gIC8vIGFwcGVuZCBhbGwgdG9nZXRoZXJcclxuICByb3dMaW5rLmFwcGVuZChuZXdsaW5rKTtcclxuICByb3cuYXBwZW5kKHJvd0xpbmspO1xyXG4gIHBhcmVudERpdkJvdHRvbS5hcHBlbmQocm93KTtcclxufVxyXG5cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIi5zZWNvbmQtY29udGFpbmVyXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1ZXN0TmFtZVwiKS50ZXh0Q29udGVudDtcclxuICAgIGNvbnN0IGFsbFNob3J0VXJscyA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXIvYWxsLXNob3J0LXVybHNcIjtcclxuICAgIGNvbnN0IGdldFVzZXJEYXRhID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogYWxsU2hvcnRVcmxzLFxyXG4gICAgICBkYXRhOiB7fSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIHVzZXJuYW1lOiBjdXJyZW50VXNlcixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgaWYgKGdldFVzZXJEYXRhLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGxldCB1cmwgb2YgZ2V0VXNlckRhdGEuZGF0YSkge1xyXG4gICAgICAgIGNyZWF0ZVJvdyhgaHR0cDovL2xvY2FsaG9zdDozMDAwLyR7dXJsLnNob3J0dXJsfWApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIm5vIHByZXZpb3VzIGxpbmtzXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=