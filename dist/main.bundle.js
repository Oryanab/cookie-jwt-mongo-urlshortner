/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(/*! ./lib/index */ "./node_modules/shortid/lib/index.js");


/***/ }),

/***/ "./node_modules/shortid/lib/alphabet.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ "./node_modules/shortid/lib/random/random-from-seed.js");

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

function get () {
  return alphabet || ORIGINAL;
}

module.exports = {
    get: get,
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),

/***/ "./node_modules/shortid/lib/build.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var generate = __webpack_require__(/*! ./generate */ "./node_modules/shortid/lib/generate.js");
var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1567752802062;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 7;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {
    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + generate(version);
    str = str + generate(clusterWorkerId);
    if (counter > 0) {
        str = str + generate(counter);
    }
    str = str + generate(seconds);
    return str;
}

module.exports = build;


/***/ }),

/***/ "./node_modules/shortid/lib/generate.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/generate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var random = __webpack_require__(/*! ./random/random-byte */ "./node_modules/shortid/lib/random/random-byte-browser.js");
var format = __webpack_require__(/*! nanoid/format */ "./node_modules/shortid/node_modules/nanoid/format.browser.js");

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + format(random, alphabet.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = generate;


/***/ }),

/***/ "./node_modules/shortid/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var build = __webpack_require__(/*! ./build */ "./node_modules/shortid/lib/build.js");
var isValid = __webpack_require__(/*! ./is-valid */ "./node_modules/shortid/lib/is-valid.js");

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js") || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;


/***/ }),

/***/ "./node_modules/shortid/lib/is-valid.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var nonAlphabetic = new RegExp('[^' +
      alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') +
    ']');
    return !nonAlphabetic.test(id);
}

module.exports = isShortId;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-byte-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
    randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
    };
} else {
    randomByte = function(size) {
        return crypto.getRandomValues(new Uint8Array(size));
    };
}

module.exports = randomByte;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),

/***/ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


module.exports = 0;


/***/ }),

/***/ "./node_modules/shortid/node_modules/nanoid/format.browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/node_modules/nanoid/format.browser.js ***!
  \********************************************************************/
/***/ ((module) => {

// This file replaces `format.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.

module.exports = function (random, alphabet, size) {
  // We can’t use bytes bigger than the alphabet. To make bytes values closer
  // to the alphabet, we apply bitmask on them. We look for the closest
  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
  // 30 symbols in the alphabet, we will take 31 (00011111).
  // We do not use faster Math.clz32, because it is not available in browsers.
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1
  // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
  // which is bigger than the alphabet). As a result, we will need more bytes,
  // than ID size, because we will refuse bytes bigger than the alphabet.

  // Every hardware random generator call is costly,
  // because we need to wait for entropy collection. This is why often it will
  // be faster to ask for few extra bytes in advance, to avoid additional calls.

  // Here we calculate how many random bytes should we call in advance.
  // It depends on ID length, mask / alphabet size and magic number 1.6
  // (which was selected according benchmarks).

  // -~f => Math.ceil(f) if n is float number
  // -~i => i + 1 if n is integer number
  var step = -~(1.6 * mask * size / alphabet.length)
  var id = ''

  while (true) {
    var bytes = random(step)
    // Compact alternative for `for (var i = 0; i < step; i++)`
    var i = step
    while (i--) {
      // If random byte is bigger than alphabet even after bitmask,
      // we refuse it by `|| ''`.
      id += alphabet[bytes[i] & mask] || ''
      // More compact than `id.length + 1 === size`
      if (id.length === +size) return id
    }
  }
}


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


const shortid = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
const notyf = new Notyf();

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

const signUpDiv = document.getElementById("signup-div");
const loginDiv = document.getElementById("login-div");
const overlayDiv = document.getElementById("overlay-div");
const userInDiv = document.getElementById("user-in");
const guestButton = document.getElementById("guest");

window.addEventListener("load", async (e) => {
  const authUrl = "/user/authorization";
  try {
    const getUserData = await axios({
      method: "GET",
      url: authUrl,
      data: {},
      headers: {
        Authorization: `Bearer ${getCookie("userToken")}`,
      },
    });
    showUserPanel(getUserData.data.username);
    notyf.success("Successful Login!");
  } catch (err) {
    notyf.error("please sign up");
  }
});

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

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
    e.preventDefault();
    e.stopImmediatePropagation();
    resetInputFields();
    hideUserPanel();
    hideUserPanerlButtons();
    notyf.success("Logged Out Successfully!");
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
    e.stopImmediatePropagation();
    resetInputFields();
    hideUserPanel();
    hideUserPanerlButtons();
    container.classList.add("right-panel-active");
    notyf.success("Logged out to Sign-up Area");
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
  notyf.success("Welcome, New Guest!");
});

/*
  minimum functionality requirement - Geust Page will be able to shorten a url
*/
// ids: convert, originalUrl, shortenUrl
document.getElementById("convert").addEventListener("click", async (e) => {
  e.preventDefault();
  const currentUser = document.getElementById("guestName").textContent;
  const originalUrl = document.getElementById("originalUrl");
  const shortenUrl = "/api/shorturl ";
  try {
    const shortenOriginalUrl = await axios({
      method: "POST",
      url: shortenUrl,
      data: {
        url: originalUrl.value,
        shortid: shortid.generate(),
        username: currentUser,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    showShortUrl(shortenOriginalUrl);
    notyf.success("Converted Successfully!");
  } catch (err) {
    notyf.error(err.response.data.message);
  }
});

function showShortUrl(ResponseJson) {
  document.getElementById(
    "shortenUrl"
  ).value = `https://cybr-url-shortener.herokuapp.com/cybr/${ResponseJson.data.shorturl}`;
}

/*
  insert user login cookie
*/
function createUserAuthCookie(name, value, hours) {
  if (hours) {
    var date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else {
    var expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

/*
  Login a user
*/

document.getElementById("login").addEventListener("click", async (e) => {
  e.preventDefault();
  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;
  const loginUrl = "/user/login";
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
        document.cookie =
          "userToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        createUserAuthCookie("userToken", loginAttempt.data.accessToken, 1);
        notyf.success("Successful Login!");
      }
    } catch (err) {
      notyf.error(err.response.data.message);
    }
  } else {
    notyf.error("please enter a valid email");
  }
});

/*
  sign up a user
*/
document.getElementById("sign-up").addEventListener("click", async (e) => {
  const signUpName = document.getElementById("sign-up-name").value;
  const signUpEmail = document.getElementById("sign-up-email").value;
  const signUpPassword = document.getElementById("sign-up-password").value;
  const signUpUrl = "/user/sign-up";
  if (signUpName.length > 0) {
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
        notyf.success(signUpAttempt.data.message);
        container.classList.remove("right-panel-active");
      }
    } catch (err) {
      notyf.error(err.response.data.message);
    }
  } else {
    notyf.error("please enter valid information");
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
  newlink.setAttribute("target", "_blank");
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
    const allShortUrls = "/user/all-short-urls";
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
        createRow(
          `https://cybr-url-shortener.herokuapp.com/cybr/${url.shorturl}`
        );
      }
      notyf.success("Success!");
    } else {
      notyf.error("no previous links");
    }
  });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkJBQTZCLEtBQUssaUJBQWlCLGlCQUFpQixpRUFBaUUsS0FBSywwQkFBMEIsMEJBQTBCLEtBQUssV0FBVyxpRkFBaUYsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsT0FBTyxlQUFlLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxN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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsYUFBYTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2FscGhhYmV0LmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9nZW5lcmF0ZS5qcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2luZGV4LmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWJ5dGUtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkLmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9ub2RlX21vZHVsZXMvbmFub2lkL2Zvcm1hdC5icm93c2VyLmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsODAwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmNmY1Zjc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgLyogbWFyZ2luOiAtMjBweCAwIDUwcHg7ICovXFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbiAgbWFyZ2luOiAyMHB4IDAgMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBtYXJnaW46IDE1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmY0YjJiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNGIyYjtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDQ1cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5naG9zdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAwIDUwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxyXFxuICBtYXJnaW46IDhweCAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdpZHRoOiA3NjhweDtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDQ4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWNvbnRhaW5lciB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWluLWNvbnRhaW5lciB7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zaWduLWluLWNvbnRhaW5lciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWNvbnRhaW5lciB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAuc2lnbi11cC1jb250YWluZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHotaW5kZXg6IDU7XFxyXFxuICBhbmltYXRpb246IHNob3cgMC42cztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaG93IHtcXHJcXG4gIDAlLFxcclxcbiAgNDkuOTklIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSxcXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheS1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktY29udGFpbmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZjQxNmM7XFxyXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNGIyYiwgI2ZmNDE2Yyk7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjRiMmIsICNmZjQxNmMpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IC0xMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDIwMCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXkge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5LXBhbmVsIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMCA0MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheS1sZWZ0IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktbGVmdCB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5LXJpZ2h0IHtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1yaWdodCB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWNvbnRhaW5lciBhIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCA1cHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBpIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhIHtcXHJcXG4gIGNvbG9yOiAjM2M5N2JmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmcm9tIGhlcmUgaXQgd2lsbCBiZSB0aGUgYnV0dG9uICovXFxyXFxuXFxyXFxuLm1lIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3NwLWFvLnNob3J0cGl4ZWwuYWkvY2xpZW50L3RvX2F1dG8scV9nbG9zc3kscmV0X2ltZy9odHRwczovL2RlbW8uYWNjZXNzcHJlc3N0aGVtZXMuY29tL3dvcmRwcmVzcy1wbHVnaW5zL3NtYXJ0LWxvZ28tc2hvd2Nhc2Uvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDEvc21hcnQtbG9nby1zaG93Y2FzZS1saXN0LWxheW91dC5wbmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogLnNlY29uZC1jb250YWluZXIge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmMWVlZjE7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMWQ0O1xcclxcblxcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMzYwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAzNjBweDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmVtYWlsIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZjRiMmI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAxNjJweDtcXHJcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLFxcclxcbiAgICBoZWlnaHQgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxcXHJcXG4gICAgYm94LXNoYWRvdyAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLFxcclxcbiAgICBib3JkZXItcmFkaXVzIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcbi5lbWFpbDpub3QoLmV4cGFuZCkge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZW1haWw6bm90KC5leHBhbmQpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZjUyMzQ7XFxyXFxufVxcclxcbi5mcm9tIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcbi5mcm9tLWNvbnRlbnRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcbi50byB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcXHJcXG59XFxyXFxuLnRvLWNvbnRlbnRzIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41NSk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG59XFxyXFxuLmF2YXRhciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG59XFxyXFxuLm5hbWUge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG4udG9wIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZjRiMmI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbn1cXHJcXG4uYXZhdGFyLWxhcmdlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIxcHg7XFxyXFxuICBoZWlnaHQ6IDQycHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTJweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMTRweDtcXHJcXG4gIHdpZHRoOiA0MnB4O1xcclxcbn1cXHJcXG4ubmFtZS1sYXJnZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogNzBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG4ueC10b3VjaCB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG59XFxyXFxuLngge1xcclxcbiAgYmFja2dyb3VuZDogI2JhODdmOTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuLngtdG91Y2g6aG92ZXIgLngge1xcclxcbiAgYmFja2dyb3VuZDogI2NiOWFmYjtcXHJcXG59XFxyXFxuLmxpbmUxIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM2NDIyZWI7XFxyXFxuICBoZWlnaHQ6IDEycHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOXB4KSB0cmFuc2xhdGVZKDRweCkgcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIHdpZHRoOiAycHg7XFxyXFxufVxcclxcbi5saW5lMiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNjQyMmViO1xcclxcbiAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgdHJhbnNsYXRlWSg0cHgpIHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgd2lkdGg6IDJweDtcXHJcXG59XFxyXFxuLmJvdHRvbSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgY29sb3I6ICM0NDQyNDc7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuLnJvdyB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLnR3aXR0ZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDBweDtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbn1cXHJcXG4ubWVkaXVtIHtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxufVxcclxcbi5saW5rIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xcclxcbn1cXHJcXG4ubGluayBhIHtcXHJcXG4gIGNvbG9yOiAjNDQ0MjQ3O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4ubGluayBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNzc3NTc5O1xcclxcbn1cXHJcXG4uZW1haWwuZXhwYW5kIHtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDEwMHB4O1xcclxcbiAgcmlnaHQ6IDI1MHB4O1xcclxcbn1cXHJcXG4uZXhwYW5kIC5mcm9tIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpO1xcclxcbn1cXHJcXG4uZXhwYW5kIC5mcm9tLWNvbnRlbnRzIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS45MSk7XFxyXFxufVxcclxcbi5leHBhbmQgLnRvIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIDEwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xcclxcbn1cXHJcXG4uZXhwYW5kIC50by1jb250ZW50cyB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVz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RUFDekUsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDVixvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLDBEQUEwRDtBQUM1RDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsODAwXFxcIik7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmNmY1Zjc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgLyogbWFyZ2luOiAtMjBweCAwIDUwcHg7ICovXFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbiAgbWFyZ2luOiAyMHB4IDAgMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBtYXJnaW46IDE1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmY0YjJiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNGIyYjtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDQ1cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5naG9zdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAwIDUwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxyXFxuICBtYXJnaW46IDhweCAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdpZHRoOiA3NjhweDtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDQ4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWNvbnRhaW5lciB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWluLWNvbnRhaW5lciB7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zaWduLWluLWNvbnRhaW5lciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWNvbnRhaW5lciB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAuc2lnbi11cC1jb250YWluZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHotaW5kZXg6IDU7XFxyXFxuICBhbmltYXRpb246IHNob3cgMC42cztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaG93IHtcXHJcXG4gIDAlLFxcclxcbiAgNDkuOTklIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSxcXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheS1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktY29udGFpbmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZjQxNmM7XFxyXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNGIyYiwgI2ZmNDE2Yyk7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjRiMmIsICNmZjQxNmMpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IC0xMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDIwMCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXkge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5LXBhbmVsIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMCA0MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheS1sZWZ0IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktbGVmdCB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5LXJpZ2h0IHtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1yaWdodCB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWNvbnRhaW5lciBhIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCA1cHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBpIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhIHtcXHJcXG4gIGNvbG9yOiAjM2M5N2JmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmcm9tIGhlcmUgaXQgd2lsbCBiZSB0aGUgYnV0dG9uICovXFxyXFxuXFxyXFxuLm1lIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3NwLWFvLnNob3J0cGl4ZWwuYWkvY2xpZW50L3RvX2F1dG8scV9nbG9zc3kscmV0X2ltZy9odHRwczovL2RlbW8uYWNjZXNzcHJlc3N0aGVtZXMuY29tL3dvcmRwcmVzcy1wbHVnaW5zL3NtYXJ0LWxvZ28tc2hvd2Nhc2Uvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDEvc21hcnQtbG9nby1zaG93Y2FzZS1saXN0LWxheW91dC5wbmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogLnNlY29uZC1jb250YWluZXIge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmMWVlZjE7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMWQ0O1xcclxcblxcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMzYwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAzNjBweDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmVtYWlsIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZjRiMmI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAxNjJweDtcXHJcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLFxcclxcbiAgICBoZWlnaHQgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxcXHJcXG4gICAgYm94LXNoYWRvdyAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLFxcclxcbiAgICBib3JkZXItcmFkaXVzIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcbi5lbWFpbDpub3QoLmV4cGFuZCkge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZW1haWw6bm90KC5leHBhbmQpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZjUyMzQ7XFxyXFxufVxcclxcbi5mcm9tIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcbi5mcm9tLWNvbnRlbnRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcbi50byB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcXHJcXG59XFxyXFxuLnRvLWNvbnRlbnRzIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41NSk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG59XFxyXFxuLmF2YXRhciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG59XFxyXFxuLm5hbWUge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG4udG9wIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZjRiMmI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbn1cXHJcXG4uYXZhdGFyLWxhcmdlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIxcHg7XFxyXFxuICBoZWlnaHQ6IDQycHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTJweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMTRweDtcXHJcXG4gIHdpZHRoOiA0MnB4O1xcclxcbn1cXHJcXG4ubmFtZS1sYXJnZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogNzBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG4ueC10b3VjaCB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG59XFxyXFxuLngge1xcclxcbiAgYmFja2dyb3VuZDogI2JhODdmOTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuLngtdG91Y2g6aG92ZXIgLngge1xcclxcbiAgYmFja2dyb3VuZDogI2NiOWFmYjtcXHJcXG59XFxyXFxuLmxpbmUxIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM2NDIyZWI7XFxyXFxuICBoZWlnaHQ6IDEycHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOXB4KSB0cmFuc2xhdGVZKDRweCkgcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIHdpZHRoOiAycHg7XFxyXFxufVxcclxcbi5saW5lMiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNjQyMmViO1xcclxcbiAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgdHJhbnNsYXRlWSg0cHgpIHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgd2lkdGg6IDJweDtcXHJcXG59XFxyXFxuLmJvdHRvbSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgY29sb3I6ICM0NDQyNDc7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuLnJvdyB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLnR3aXR0ZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDBweDtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbn1cXHJcXG4ubWVkaXVtIHtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxufVxcclxcbi5saW5rIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xcclxcbn1cXHJcXG4ubGluayBhIHtcXHJcXG4gIGNvbG9yOiAjNDQ0MjQ3O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4ubGluayBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNzc3NTc5O1xcclxcbn1cXHJcXG4uZW1haWwuZXhwYW5kIHtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDEwMHB4O1xcclxcbiAgcmlnaHQ6IDI1MHB4O1xcclxcbn1cXHJcXG4uZXhwYW5kIC5mcm9tIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpO1xcclxcbn1cXHJcXG4uZXhwYW5kIC5mcm9tLWNvbnRlbnRzIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS45MSk7XFxyXFxufVxcclxcbi5leHBhbmQgLnRvIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIDEwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xcclxcbn1cXHJcXG4uZXhwYW5kIC50by1jb250ZW50cyB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tRnJvbVNlZWQgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkJyk7XG5cbnZhciBPUklHSU5BTCA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWl8tJztcbnZhciBhbHBoYWJldDtcbnZhciBwcmV2aW91c1NlZWQ7XG5cbnZhciBzaHVmZmxlZDtcblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgc2h1ZmZsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgaWYgKCFfYWxwaGFiZXRfKSB7XG4gICAgICAgIGlmIChhbHBoYWJldCAhPT0gT1JJR0lOQUwpIHtcbiAgICAgICAgICAgIGFscGhhYmV0ID0gT1JJR0lOQUw7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0XyA9PT0gYWxwaGFiZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfLmxlbmd0aCAhPT0gT1JJR0lOQUwubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFlvdSBzdWJtaXR0ZWQgJyArIF9hbHBoYWJldF8ubGVuZ3RoICsgJyBjaGFyYWN0ZXJzOiAnICsgX2FscGhhYmV0Xyk7XG4gICAgfVxuXG4gICAgdmFyIHVuaXF1ZSA9IF9hbHBoYWJldF8uc3BsaXQoJycpLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmQsIGFycil7XG4gICAgICAgcmV0dXJuIGluZCAhPT0gYXJyLmxhc3RJbmRleE9mKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHVuaXF1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gVGhlc2UgY2hhcmFjdGVycyB3ZXJlIG5vdCB1bmlxdWU6ICcgKyB1bmlxdWUuam9pbignLCAnKSk7XG4gICAgfVxuXG4gICAgYWxwaGFiZXQgPSBfYWxwaGFiZXRfO1xuICAgIHJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGNoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xyk7XG4gICAgcmV0dXJuIGFscGhhYmV0O1xufVxuXG5mdW5jdGlvbiBzZXRTZWVkKHNlZWQpIHtcbiAgICByYW5kb21Gcm9tU2VlZC5zZWVkKHNlZWQpO1xuICAgIGlmIChwcmV2aW91c1NlZWQgIT09IHNlZWQpIHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcHJldmlvdXNTZWVkID0gc2VlZDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNodWZmbGUoKSB7XG4gICAgaWYgKCFhbHBoYWJldCkge1xuICAgICAgICBzZXRDaGFyYWN0ZXJzKE9SSUdJTkFMKTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlQXJyYXkgPSBhbHBoYWJldC5zcGxpdCgnJyk7XG4gICAgdmFyIHRhcmdldEFycmF5ID0gW107XG4gICAgdmFyIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICB2YXIgY2hhcmFjdGVySW5kZXg7XG5cbiAgICB3aGlsZSAoc291cmNlQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgICAgIGNoYXJhY3RlckluZGV4ID0gTWF0aC5mbG9vcihyICogc291cmNlQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgdGFyZ2V0QXJyYXkucHVzaChzb3VyY2VBcnJheS5zcGxpY2UoY2hhcmFjdGVySW5kZXgsIDEpWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldEFycmF5LmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBnZXRTaHVmZmxlZCgpIHtcbiAgICBpZiAoc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHNodWZmbGVkO1xuICAgIH1cbiAgICBzaHVmZmxlZCA9IHNodWZmbGUoKTtcbiAgICByZXR1cm4gc2h1ZmZsZWQ7XG59XG5cbi8qKlxuICogbG9va3VwIHNodWZmbGVkIGxldHRlclxuICogQHBhcmFtIGluZGV4XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rdXAoaW5kZXgpIHtcbiAgICB2YXIgYWxwaGFiZXRTaHVmZmxlZCA9IGdldFNodWZmbGVkKCk7XG4gICAgcmV0dXJuIGFscGhhYmV0U2h1ZmZsZWRbaW5kZXhdO1xufVxuXG5mdW5jdGlvbiBnZXQgKCkge1xuICByZXR1cm4gYWxwaGFiZXQgfHwgT1JJR0lOQUw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGdldDogZ2V0LFxuICAgIGNoYXJhY3RlcnM6IGNoYXJhY3RlcnMsXG4gICAgc2VlZDogc2V0U2VlZCxcbiAgICBsb29rdXA6IGxvb2t1cCxcbiAgICBzaHVmZmxlZDogZ2V0U2h1ZmZsZWRcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZW5lcmF0ZSA9IHJlcXVpcmUoJy4vZ2VuZXJhdGUnKTtcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuLy8gSWdub3JlIGFsbCBtaWxsaXNlY29uZHMgYmVmb3JlIGEgY2VydGFpbiB0aW1lIHRvIHJlZHVjZSB0aGUgc2l6ZSBvZiB0aGUgZGF0ZSBlbnRyb3B5IHdpdGhvdXQgc2FjcmlmaWNpbmcgdW5pcXVlbmVzcy5cbi8vIFRoaXMgbnVtYmVyIHNob3VsZCBiZSB1cGRhdGVkIGV2ZXJ5IHllYXIgb3Igc28gdG8ga2VlcCB0aGUgZ2VuZXJhdGVkIGlkIHNob3J0LlxuLy8gVG8gcmVnZW5lcmF0ZSBgbmV3IERhdGUoKSAtIDBgIGFuZCBidW1wIHRoZSB2ZXJzaW9uLiBBbHdheXMgYnVtcCB0aGUgdmVyc2lvbiFcbnZhciBSRURVQ0VfVElNRSA9IDE1Njc3NTI4MDIwNjI7XG5cbi8vIGRvbid0IGNoYW5nZSB1bmxlc3Mgd2UgY2hhbmdlIHRoZSBhbGdvcyBvciBSRURVQ0VfVElNRVxuLy8gbXVzdCBiZSBhbiBpbnRlZ2VyIGFuZCBsZXNzIHRoYW4gMTZcbnZhciB2ZXJzaW9uID0gNztcblxuLy8gQ291bnRlciBpcyB1c2VkIHdoZW4gc2hvcnRpZCBpcyBjYWxsZWQgbXVsdGlwbGUgdGltZXMgaW4gb25lIHNlY29uZC5cbnZhciBjb3VudGVyO1xuXG4vLyBSZW1lbWJlciB0aGUgbGFzdCB0aW1lIHNob3J0aWQgd2FzIGNhbGxlZCBpbiBjYXNlIGNvdW50ZXIgaXMgbmVlZGVkLlxudmFyIHByZXZpb3VzU2Vjb25kcztcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgaWRcbiAqIFJldHVybnMgc3RyaW5nIGlkXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkKGNsdXN0ZXJXb3JrZXJJZCkge1xuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIFJFRFVDRV9USU1FKSAqIDAuMDAxKTtcblxuICAgIGlmIChzZWNvbmRzID09PSBwcmV2aW91c1NlY29uZHMpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBwcmV2aW91c1NlY29uZHMgPSBzZWNvbmRzO1xuICAgIH1cblxuICAgIHN0ciA9IHN0ciArIGdlbmVyYXRlKHZlcnNpb24pO1xuICAgIHN0ciA9IHN0ciArIGdlbmVyYXRlKGNsdXN0ZXJXb3JrZXJJZCk7XG4gICAgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGdlbmVyYXRlKGNvdW50ZXIpO1xuICAgIH1cbiAgICBzdHIgPSBzdHIgKyBnZW5lcmF0ZShzZWNvbmRzKTtcbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG52YXIgcmFuZG9tID0gcmVxdWlyZSgnLi9yYW5kb20vcmFuZG9tLWJ5dGUnKTtcbnZhciBmb3JtYXQgPSByZXF1aXJlKCduYW5vaWQvZm9ybWF0Jyk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlKG51bWJlcikge1xuICAgIHZhciBsb29wQ291bnRlciA9IDA7XG4gICAgdmFyIGRvbmU7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgc3RyID0gc3RyICsgZm9ybWF0KHJhbmRvbSwgYWxwaGFiZXQuZ2V0KCksIDEpO1xuICAgICAgICBkb25lID0gbnVtYmVyIDwgKE1hdGgucG93KDE2LCBsb29wQ291bnRlciArIDEgKSApO1xuICAgICAgICBsb29wQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG52YXIgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG52YXIgaXNWYWxpZCA9IHJlcXVpcmUoJy4vaXMtdmFsaWQnKTtcblxuLy8gaWYgeW91IGFyZSB1c2luZyBjbHVzdGVyIG9yIG11bHRpcGxlIHNlcnZlcnMgdXNlIHRoaXMgdG8gbWFrZSBlYWNoIGluc3RhbmNlXG4vLyBoYXMgYSB1bmlxdWUgdmFsdWUgZm9yIHdvcmtlclxuLy8gTm90ZTogSSBkb24ndCBrbm93IGlmIHRoaXMgaXMgYXV0b21hdGljYWxseSBzZXQgd2hlbiB1c2luZyB0aGlyZFxuLy8gcGFydHkgY2x1c3RlciBzb2x1dGlvbnMgc3VjaCBhcyBwbTIuXG52YXIgY2x1c3RlcldvcmtlcklkID0gcmVxdWlyZSgnLi91dGlsL2NsdXN0ZXItd29ya2VyLWlkJykgfHwgMDtcblxuLyoqXG4gKiBTZXQgdGhlIHNlZWQuXG4gKiBIaWdobHkgcmVjb21tZW5kZWQgaWYgeW91IGRvbid0IHdhbnQgcGVvcGxlIHRvIHRyeSB0byBmaWd1cmUgb3V0IHlvdXIgaWQgc2NoZW1hLlxuICogZXhwb3NlZCBhcyBzaG9ydGlkLnNlZWQoaW50KVxuICogQHBhcmFtIHNlZWQgSW50ZWdlciB2YWx1ZSB0byBzZWVkIHRoZSByYW5kb20gYWxwaGFiZXQuICBBTFdBWVMgVVNFIFRIRSBTQU1FIFNFRUQgb3IgeW91IG1pZ2h0IGdldCBvdmVybGFwcy5cbiAqL1xuZnVuY3Rpb24gc2VlZChzZWVkVmFsdWUpIHtcbiAgICBhbHBoYWJldC5zZWVkKHNlZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY2x1c3RlciB3b3JrZXIgb3IgbWFjaGluZSBpZFxuICogZXhwb3NlZCBhcyBzaG9ydGlkLndvcmtlcihpbnQpXG4gKiBAcGFyYW0gd29ya2VySWQgd29ya2VyIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlci4gIE51bWJlciBsZXNzIHRoYW4gMTYgaXMgcmVjb21tZW5kZWQuXG4gKiByZXR1cm5zIHNob3J0aWQgbW9kdWxlIHNvIGl0IGNhbiBiZSBjaGFpbmVkLlxuICovXG5mdW5jdGlvbiB3b3JrZXIod29ya2VySWQpIHtcbiAgICBjbHVzdGVyV29ya2VySWQgPSB3b3JrZXJJZDtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICpcbiAqIHNldHMgbmV3IGNoYXJhY3RlcnMgdG8gdXNlIGluIHRoZSBhbHBoYWJldFxuICogcmV0dXJucyB0aGUgc2h1ZmZsZWQgYWxwaGFiZXRcbiAqL1xuZnVuY3Rpb24gY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKSB7XG4gICAgaWYgKG5ld0NoYXJhY3RlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbHBoYWJldC5jaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBhbHBoYWJldC5zaHVmZmxlZCgpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gIHJldHVybiBidWlsZChjbHVzdGVyV29ya2VySWQpO1xufVxuXG4vLyBFeHBvcnQgYWxsIG90aGVyIGZ1bmN0aW9ucyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBnZW5lcmF0ZSBmdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5zZWVkID0gc2VlZDtcbm1vZHVsZS5leHBvcnRzLndvcmtlciA9IHdvcmtlcjtcbm1vZHVsZS5leHBvcnRzLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xubW9kdWxlLmV4cG9ydHMuaXNWYWxpZCA9IGlzVmFsaWQ7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbmZ1bmN0aW9uIGlzU2hvcnRJZChpZCkge1xuICAgIGlmICghaWQgfHwgdHlwZW9mIGlkICE9PSAnc3RyaW5nJyB8fCBpZC5sZW5ndGggPCA2ICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIG5vbkFscGhhYmV0aWMgPSBuZXcgUmVnRXhwKCdbXicgK1xuICAgICAgYWxwaGFiZXQuZ2V0KCkucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJykgK1xuICAgICddJyk7XG4gICAgcmV0dXJuICFub25BbHBoYWJldGljLnRlc3QoaWQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2hvcnRJZDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyeXB0byA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICh3aW5kb3cuY3J5cHRvIHx8IHdpbmRvdy5tc0NyeXB0byk7IC8vIElFIDExIHVzZXMgd2luZG93Lm1zQ3J5cHRvXG5cbnZhciByYW5kb21CeXRlO1xuXG5pZiAoIWNyeXB0byB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgIHJhbmRvbUJ5dGUgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICAgIHZhciBieXRlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgYnl0ZXMucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfTtcbn0gZWxzZSB7XG4gICAgcmFuZG9tQnl0ZSA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgICAgcmV0dXJuIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpO1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tQnl0ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gRm91bmQgdGhpcyBzZWVkLWJhc2VkIHJhbmRvbSBnZW5lcmF0b3Igc29tZXdoZXJlXG4vLyBCYXNlZCBvbiBUaGUgQ2VudHJhbCBSYW5kb21pemVyIDEuMyAoQykgMTk5NyBieSBQYXVsIEhvdWxlIChob3VsZUBtc2MuY29ybmVsbC5lZHUpXG5cbnZhciBzZWVkID0gMTtcblxuLyoqXG4gKiByZXR1cm4gYSByYW5kb20gbnVtYmVyIGJhc2VkIG9uIGEgc2VlZFxuICogQHBhcmFtIHNlZWRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldE5leHRWYWx1ZSgpIHtcbiAgICBzZWVkID0gKHNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xuICAgIHJldHVybiBzZWVkLygyMzMyODAuMCk7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoX3NlZWRfKSB7XG4gICAgc2VlZCA9IF9zZWVkXztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbmV4dFZhbHVlOiBnZXROZXh0VmFsdWUsXG4gICAgc2VlZDogc2V0U2VlZFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAwO1xuIiwiLy8gVGhpcyBmaWxlIHJlcGxhY2VzIGBmb3JtYXQuanNgIGluIGJ1bmRsZXJzIGxpa2Ugd2VicGFjayBvciBSb2xsdXAsXG4vLyBhY2NvcmRpbmcgdG8gYGJyb3dzZXJgIGNvbmZpZyBpbiBgcGFja2FnZS5qc29uYC5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocmFuZG9tLCBhbHBoYWJldCwgc2l6ZSkge1xuICAvLyBXZSBjYW7igJl0IHVzZSBieXRlcyBiaWdnZXIgdGhhbiB0aGUgYWxwaGFiZXQuIFRvIG1ha2UgYnl0ZXMgdmFsdWVzIGNsb3NlclxuICAvLyB0byB0aGUgYWxwaGFiZXQsIHdlIGFwcGx5IGJpdG1hc2sgb24gdGhlbS4gV2UgbG9vayBmb3IgdGhlIGNsb3Nlc3RcbiAgLy8gYDIgKiogeCAtIDFgIG51bWJlciwgd2hpY2ggd2lsbCBiZSBiaWdnZXIgdGhhbiBhbHBoYWJldCBzaXplLiBJZiB3ZSBoYXZlXG4gIC8vIDMwIHN5bWJvbHMgaW4gdGhlIGFscGhhYmV0LCB3ZSB3aWxsIHRha2UgMzEgKDAwMDExMTExKS5cbiAgLy8gV2UgZG8gbm90IHVzZSBmYXN0ZXIgTWF0aC5jbHozMiwgYmVjYXVzZSBpdCBpcyBub3QgYXZhaWxhYmxlIGluIGJyb3dzZXJzLlxuICB2YXIgbWFzayA9ICgyIDw8IE1hdGgubG9nKGFscGhhYmV0Lmxlbmd0aCAtIDEpIC8gTWF0aC5MTjIpIC0gMVxuICAvLyBCaXRtYXNrIGlzIG5vdCBhIHBlcmZlY3Qgc29sdXRpb24gKGluIG91ciBleGFtcGxlIGl0IHdpbGwgcGFzcyAzMSBieXRlcyxcbiAgLy8gd2hpY2ggaXMgYmlnZ2VyIHRoYW4gdGhlIGFscGhhYmV0KS4gQXMgYSByZXN1bHQsIHdlIHdpbGwgbmVlZCBtb3JlIGJ5dGVzLFxuICAvLyB0aGFuIElEIHNpemUsIGJlY2F1c2Ugd2Ugd2lsbCByZWZ1c2UgYnl0ZXMgYmlnZ2VyIHRoYW4gdGhlIGFscGhhYmV0LlxuXG4gIC8vIEV2ZXJ5IGhhcmR3YXJlIHJhbmRvbSBnZW5lcmF0b3IgY2FsbCBpcyBjb3N0bHksXG4gIC8vIGJlY2F1c2Ugd2UgbmVlZCB0byB3YWl0IGZvciBlbnRyb3B5IGNvbGxlY3Rpb24uIFRoaXMgaXMgd2h5IG9mdGVuIGl0IHdpbGxcbiAgLy8gYmUgZmFzdGVyIHRvIGFzayBmb3IgZmV3IGV4dHJhIGJ5dGVzIGluIGFkdmFuY2UsIHRvIGF2b2lkIGFkZGl0aW9uYWwgY2FsbHMuXG5cbiAgLy8gSGVyZSB3ZSBjYWxjdWxhdGUgaG93IG1hbnkgcmFuZG9tIGJ5dGVzIHNob3VsZCB3ZSBjYWxsIGluIGFkdmFuY2UuXG4gIC8vIEl0IGRlcGVuZHMgb24gSUQgbGVuZ3RoLCBtYXNrIC8gYWxwaGFiZXQgc2l6ZSBhbmQgbWFnaWMgbnVtYmVyIDEuNlxuICAvLyAod2hpY2ggd2FzIHNlbGVjdGVkIGFjY29yZGluZyBiZW5jaG1hcmtzKS5cblxuICAvLyAtfmYgPT4gTWF0aC5jZWlsKGYpIGlmIG4gaXMgZmxvYXQgbnVtYmVyXG4gIC8vIC1+aSA9PiBpICsgMSBpZiBuIGlzIGludGVnZXIgbnVtYmVyXG4gIHZhciBzdGVwID0gLX4oMS42ICogbWFzayAqIHNpemUgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHZhciBpZCA9ICcnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgYnl0ZXMgPSByYW5kb20oc3RlcClcbiAgICAvLyBDb21wYWN0IGFsdGVybmF0aXZlIGZvciBgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGVwOyBpKyspYFxuICAgIHZhciBpID0gc3RlcFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIC8vIElmIHJhbmRvbSBieXRlIGlzIGJpZ2dlciB0aGFuIGFscGhhYmV0IGV2ZW4gYWZ0ZXIgYml0bWFzayxcbiAgICAgIC8vIHdlIHJlZnVzZSBpdCBieSBgfHwgJydgLlxuICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbaV0gJiBtYXNrXSB8fCAnJ1xuICAgICAgLy8gTW9yZSBjb21wYWN0IHRoYW4gYGlkLmxlbmd0aCArIDEgPT09IHNpemVgXG4gICAgICBpZiAoaWQubGVuZ3RoID09PSArc2l6ZSkgcmV0dXJuIGlkXG4gICAgfVxuICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XHJcbmNvbnN0IHNob3J0aWQgPSByZXF1aXJlKFwic2hvcnRpZFwiKTtcclxuY29uc3Qgbm90eWYgPSBuZXcgTm90eWYoKTtcclxuXHJcbmNvbnN0IHNpZ25VcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnblVwXCIpO1xyXG5jb25zdCBzaWduSW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25JblwiKTtcclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XHJcblxyXG5jb25zdCBzaWduVXBEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ251cC1kaXZcIik7XHJcbmNvbnN0IGxvZ2luRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1kaXZcIik7XHJcbmNvbnN0IG92ZXJsYXlEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXktZGl2XCIpO1xyXG5jb25zdCB1c2VySW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItaW5cIik7XHJcbmNvbnN0IGd1ZXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJndWVzdFwiKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBhc3luYyAoZSkgPT4ge1xyXG4gIGNvbnN0IGF1dGhVcmwgPSBcIi91c2VyL2F1dGhvcml6YXRpb25cIjtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZ2V0VXNlckRhdGEgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBhdXRoVXJsLFxyXG4gICAgICBkYXRhOiB7fSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ1c2VyVG9rZW5cIil9YCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgc2hvd1VzZXJQYW5lbChnZXRVc2VyRGF0YS5kYXRhLnVzZXJuYW1lKTtcclxuICAgIG5vdHlmLnN1Y2Nlc3MoXCJTdWNjZXNzZnVsIExvZ2luIVwiKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIG5vdHlmLmVycm9yKFwicGxlYXNlIHNpZ24gdXBcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdldENvb2tpZShjbmFtZSkge1xyXG4gIGxldCBuYW1lID0gY25hbWUgKyBcIj1cIjtcclxuICBsZXQgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpO1xyXG4gIGxldCBjYSA9IGRlY29kZWRDb29raWUuc3BsaXQoXCI7XCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBjID0gY2FbaV07XHJcbiAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gXCIgXCIpIHtcclxuICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gXCJcIjtcclxufVxyXG5cclxuc2lnblVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyaWdodC1wYW5lbC1hY3RpdmVcIik7XHJcbn0pO1xyXG5cclxuc2lnbkluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJyaWdodC1wYW5lbC1hY3RpdmVcIik7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2hvd1VzZXJQYW5lbCh1c2VybmFtZSkge1xyXG4gIHNpZ25VcERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgbG9naW5EaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIG92ZXJsYXlEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIHVzZXJJbkRpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3Vlc3ROYW1lXCIpLnRleHRDb250ZW50ID0gdXNlcm5hbWU7XHJcbiAgc2hvd1VzZXJQYW5lcmxCdXR0b25zKCk7XHJcbn1cclxuZnVuY3Rpb24gc2hvd1VzZXJQYW5lcmxCdXR0b25zKCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbi11cC11c2VyLWluXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctbGlzdC11c2VyLWluXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvdXQtdXNlci1pblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb3V0LXVzZXItaW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgcmVzZXRJbnB1dEZpZWxkcygpO1xyXG4gICAgaGlkZVVzZXJQYW5lbCgpO1xyXG4gICAgaGlkZVVzZXJQYW5lcmxCdXR0b25zKCk7XHJcbiAgICBub3R5Zi5zdWNjZXNzKFwiTG9nZ2VkIE91dCBTdWNjZXNzZnVsbHkhXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlVXNlclBhbmVsKCkge1xyXG4gIHNpZ25VcERpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGxvZ2luRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgb3ZlcmxheURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIHVzZXJJbkRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVVc2VyUGFuZXJsQnV0dG9ucygpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ24tdXAtdXNlci1pblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvdy1saXN0LXVzZXItaW5cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb3V0LXVzZXItaW5cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbi11cC11c2VyLWluXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIHJlc2V0SW5wdXRGaWVsZHMoKTtcclxuICAgIGhpZGVVc2VyUGFuZWwoKTtcclxuICAgIGhpZGVVc2VyUGFuZXJsQnV0dG9ucygpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyaWdodC1wYW5lbC1hY3RpdmVcIik7XHJcbiAgICBub3R5Zi5zdWNjZXNzKFwiTG9nZ2VkIG91dCB0byBTaWduLXVwIEFyZWFcIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0SW5wdXRGaWVsZHMoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG9ydGVuVXJsXCIpLnZhbHVlID0gXCJcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yaWdpbmFsVXJsXCIpLnZhbHVlID0gXCJcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLWVtYWlsXCIpLnZhbHVlID0gXCJcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLXBhc3N3b3JkXCIpLnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxuZ3Vlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHNob3dVc2VyUGFuZWwoXCJHdWVzdFwiKTtcclxuICBoaWRlVXNlclBhbmVybEJ1dHRvbnMoKTtcclxuICBub3R5Zi5zdWNjZXNzKFwiV2VsY29tZSwgTmV3IEd1ZXN0IVwiKTtcclxufSk7XHJcblxyXG4vKlxyXG4gIG1pbmltdW0gZnVuY3Rpb25hbGl0eSByZXF1aXJlbWVudCAtIEdldXN0IFBhZ2Ugd2lsbCBiZSBhYmxlIHRvIHNob3J0ZW4gYSB1cmxcclxuKi9cclxuLy8gaWRzOiBjb252ZXJ0LCBvcmlnaW5hbFVybCwgc2hvcnRlblVybFxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnZlcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJndWVzdE5hbWVcIikudGV4dENvbnRlbnQ7XHJcbiAgY29uc3Qgb3JpZ2luYWxVcmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yaWdpbmFsVXJsXCIpO1xyXG4gIGNvbnN0IHNob3J0ZW5VcmwgPSBcIi9hcGkvc2hvcnR1cmwgXCI7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNob3J0ZW5PcmlnaW5hbFVybCA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBzaG9ydGVuVXJsLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdXJsOiBvcmlnaW5hbFVybC52YWx1ZSxcclxuICAgICAgICBzaG9ydGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgdXNlcm5hbWU6IGN1cnJlbnRVc2VyLFxyXG4gICAgICB9LFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHNob3dTaG9ydFVybChzaG9ydGVuT3JpZ2luYWxVcmwpO1xyXG4gICAgbm90eWYuc3VjY2VzcyhcIkNvbnZlcnRlZCBTdWNjZXNzZnVsbHkhXCIpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgbm90eWYuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNob3dTaG9ydFVybChSZXNwb25zZUpzb24pIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwic2hvcnRlblVybFwiXHJcbiAgKS52YWx1ZSA9IGBodHRwczovL2N5YnItdXJsLXNob3J0ZW5lci5oZXJva3VhcHAuY29tL2N5YnIvJHtSZXNwb25zZUpzb24uZGF0YS5zaG9ydHVybH1gO1xyXG59XHJcblxyXG4vKlxyXG4gIGluc2VydCB1c2VyIGxvZ2luIGNvb2tpZVxyXG4qL1xyXG5mdW5jdGlvbiBjcmVhdGVVc2VyQXV0aENvb2tpZShuYW1lLCB2YWx1ZSwgaG91cnMpIHtcclxuICBpZiAoaG91cnMpIHtcclxuICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIGhvdXJzICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgdmFyIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9HTVRTdHJpbmcoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIGV4cGlyZXMgPSBcIlwiO1xyXG4gIH1cclxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcbn1cclxuXHJcbi8qXHJcbiAgTG9naW4gYSB1c2VyXHJcbiovXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBsb2dpbkVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1lbWFpbFwiKS52YWx1ZTtcclxuICBjb25zdCBsb2dpblBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1wYXNzd29yZFwiKS52YWx1ZTtcclxuICBjb25zdCBsb2dpblVybCA9IFwiL3VzZXIvbG9naW5cIjtcclxuICBpZiAobG9naW5FbWFpbC5sZW5ndGggPiA2ICYmIGxvZ2luUGFzc3dvcmQubGVuZ3RoID4gMCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgbG9naW5BdHRlbXB0ID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBsb2dpblVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBlbWFpbDogbG9naW5FbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiBsb2dpblBhc3N3b3JkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChsb2dpbkF0dGVtcHQuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBzaG93VXNlclBhbmVsKGxvZ2luQXR0ZW1wdC5kYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPVxyXG4gICAgICAgICAgXCJ1c2VyVG9rZW49IDsgZXhwaXJlcyA9IFRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UO3BhdGg9L1wiO1xyXG4gICAgICAgIGNyZWF0ZVVzZXJBdXRoQ29va2llKFwidXNlclRva2VuXCIsIGxvZ2luQXR0ZW1wdC5kYXRhLmFjY2Vzc1Rva2VuLCAxKTtcclxuICAgICAgICBub3R5Zi5zdWNjZXNzKFwiU3VjY2Vzc2Z1bCBMb2dpbiFcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBub3R5Zi5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgbm90eWYuZXJyb3IoXCJwbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbFwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLypcclxuICBzaWduIHVwIGEgdXNlclxyXG4qL1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ24tdXBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgY29uc3Qgc2lnblVwTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbi11cC1uYW1lXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHNpZ25VcEVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduLXVwLWVtYWlsXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHNpZ25VcFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduLXVwLXBhc3N3b3JkXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHNpZ25VcFVybCA9IFwiL3VzZXIvc2lnbi11cFwiO1xyXG4gIGlmIChzaWduVXBOYW1lLmxlbmd0aCA+IDApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNpZ25VcEF0dGVtcHQgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IHNpZ25VcFVybCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBuYW1lOiBzaWduVXBOYW1lLFxyXG4gICAgICAgICAgZW1haWw6IHNpZ25VcEVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHNpZ25VcFBhc3N3b3JkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChzaWduVXBBdHRlbXB0LnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgbm90eWYuc3VjY2VzcyhzaWduVXBBdHRlbXB0LmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJyaWdodC1wYW5lbC1hY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBub3R5Zi5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgbm90eWYuZXJyb3IoXCJwbGVhc2UgZW50ZXIgdmFsaWQgaW5mb3JtYXRpb25cIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qXHJcbiAgdXNlciBpcyBhYmxlIHRvIHNlZSBhbGwgaGlzIHNob3J0ZW4gdXJsc1xyXG4qL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUm93KGxpbmspIHtcclxuICBjb25zdCBwYXJlbnREaXZCb3R0b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbVwiKTtcclxuICAvLyBjcmVhdGUgdGhlIHJvd1xyXG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgY29uc3Qgcm93TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcm93TGluay5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcclxuICBjb25zdCBuZXdsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgbmV3bGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGxpbmspO1xyXG4gIG5ld2xpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xyXG4gIG5ld2xpbmsudGV4dENvbnRlbnQgPSBsaW5rO1xyXG5cclxuICAvLyBhcHBlbmQgYWxsIHRvZ2V0aGVyXHJcbiAgcm93TGluay5hcHBlbmQobmV3bGluayk7XHJcbiAgcm93LmFwcGVuZChyb3dMaW5rKTtcclxuICBwYXJlbnREaXZCb3R0b20uYXBwZW5kKHJvdyk7XHJcbn1cclxuXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kLWNvbnRhaW5lclwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJndWVzdE5hbWVcIikudGV4dENvbnRlbnQ7XHJcbiAgICBjb25zdCBhbGxTaG9ydFVybHMgPSBcIi91c2VyL2FsbC1zaG9ydC11cmxzXCI7XHJcbiAgICBjb25zdCBnZXRVc2VyRGF0YSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICB1cmw6IGFsbFNob3J0VXJscyxcclxuICAgICAgZGF0YToge30sXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB1c2VybmFtZTogY3VycmVudFVzZXIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChnZXRVc2VyRGF0YS5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChsZXQgdXJsIG9mIGdldFVzZXJEYXRhLmRhdGEpIHtcclxuICAgICAgICBjcmVhdGVSb3coXHJcbiAgICAgICAgICBgaHR0cHM6Ly9jeWJyLXVybC1zaG9ydGVuZXIuaGVyb2t1YXBwLmNvbS9jeWJyLyR7dXJsLnNob3J0dXJsfWBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIG5vdHlmLnN1Y2Nlc3MoXCJTdWNjZXNzIVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5vdHlmLmVycm9yKFwibm8gcHJldmlvdXMgbGlua3NcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==