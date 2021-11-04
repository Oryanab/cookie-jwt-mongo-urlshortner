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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkJBQTZCLEtBQUssaUJBQWlCLGlCQUFpQixpRUFBaUUsS0FBSywwQkFBMEIsMEJBQTBCLEtBQUssV0FBVyxpRkFBaUYsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsT0FBTyxlQUFlLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxN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QUFDQTtBQUNBO0FBQ0EsNkRBQTZELDJCQUEyQjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxhQUFhO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2luZGV4LmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvYWxwaGFiZXQuanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9idWlsZC5qcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL2dlbmVyYXRlLmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi9pcy12YWxpZC5qcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vbm9kZV9tb2R1bGVzL3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9ub2RlX21vZHVsZXMvc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQuanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL2xpYi91dGlsL2NsdXN0ZXItd29ya2VyLWlkLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL25vZGVfbW9kdWxlcy9zaG9ydGlkL25vZGVfbW9kdWxlcy9uYW5vaWQvZm9ybWF0LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw4MDApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogI2Y2ZjVmNztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICAvKiBtYXJnaW46IC0yMHB4IDAgNTBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICBtYXJnaW46IDIwcHggMCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIG1hcmdpbjogMTVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjRiMmI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0YjJiO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IDEycHggNDVweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmdob3N0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDAgNTBweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEycHggMTVweDtcXHJcXG4gIG1hcmdpbjogOHB4IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDc2OHB4O1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogNDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tY29udGFpbmVyIHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItaW4tY29udGFpbmVyIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLnNpZ24taW4tY29udGFpbmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtY29udGFpbmVyIHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zaWduLXVwLWNvbnRhaW5lciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgei1pbmRleDogNTtcXHJcXG4gIGFuaW1hdGlvbjogc2hvdyAwLjZzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNob3cge1xcclxcbiAgMCUsXFxyXFxuICA0OS45OSUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlLFxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5LWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXkge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmNDE2YztcXHJcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY0YjJiLCAjZmY0MTZjKTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNGIyYiwgI2ZmNDE2Yyk7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogLTEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMjAwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktcGFuZWwge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAwIDQwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5LWxlZnQge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1sZWZ0IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktcmlnaHQge1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LXJpZ2h0IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtY29udGFpbmVyIGEge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIDVweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGkge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGEge1xcclxcbiAgY29sb3I6ICMzYzk3YmY7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIGZyb20gaGVyZSBpdCB3aWxsIGJlIHRoZSBidXR0b24gKi9cXHJcXG5cXHJcXG4ubWUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3AtYW8uc2hvcnRwaXhlbC5haS9jbGllbnQvdG9fYXV0byxxX2dsb3NzeSxyZXRfaW1nL2h0dHBzOi8vZGVtby5hY2Nlc3NwcmVzc3RoZW1lcy5jb20vd29yZHByZXNzLXBsdWdpbnMvc21hcnQtbG9nby1zaG93Y2FzZS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMS9zbWFydC1sb2dvLXNob3djYXNlLWxpc3QtbGF5b3V0LnBuZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuc2Vjb25kLWNvbnRhaW5lciB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogI2YxZWVmMTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQxZDQ7XFxyXFxuXFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAzNjBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDM2MHB4O1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uZW1haWwge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmNGIyYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDE2MnB4O1xcclxcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXFxyXFxuICAgIGhlaWdodCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLFxcclxcbiAgICBib3gtc2hhZG93IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXFxyXFxuICAgIGJvcmRlci1yYWRpdXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG59XFxyXFxuLmVtYWlsOm5vdCguZXhwYW5kKSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5lbWFpbDpub3QoLmV4cGFuZCk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmNTIzNDtcXHJcXG59XFxyXFxuLmZyb20ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyAxMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcXHJcXG59XFxyXFxuLmZyb20tY29udGVudHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG59XFxyXFxuLnRvIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpO1xcclxcbn1cXHJcXG4udG8tY29udGVudHMge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjU1KTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcclxcbn1cXHJcXG4uYXZhdGFyIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDhweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAyNHB4O1xcclxcbn1cXHJcXG4ubmFtZSB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogNDBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcbi50b3Age1xcclxcbiAgYmFja2dyb3VuZDogI2ZmNGIyYjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxufVxcclxcbi5hdmF0YXItbGFyZ2Uge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjFweDtcXHJcXG4gIGhlaWdodDogNDJweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAxNHB4O1xcclxcbiAgd2lkdGg6IDQycHg7XFxyXFxufVxcclxcbi5uYW1lLWxhcmdlIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcbi54LXRvdWNoIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbn1cXHJcXG4ueCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYmE4N2Y5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG4ueC10b3VjaDpob3ZlciAueCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjY2I5YWZiO1xcclxcbn1cXHJcXG4ubGluZTEge1xcclxcbiAgYmFja2dyb3VuZDogIzY0MjJlYjtcXHJcXG4gIGhlaWdodDogMTJweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5cHgpIHRyYW5zbGF0ZVkoNHB4KSByb3RhdGUoNDVkZWcpO1xcclxcbiAgd2lkdGg6IDJweDtcXHJcXG59XFxyXFxuLmxpbmUyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM2NDIyZWI7XFxyXFxuICBoZWlnaHQ6IDEycHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOXB4KSB0cmFuc2xhdGVZKDRweCkgcm90YXRlKC00NWRlZyk7XFxyXFxuICB3aWR0aDogMnB4O1xcclxcbn1cXHJcXG4uYm90dG9tIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBjb2xvcjogIzQ0NDI0NztcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbn1cXHJcXG4ucm93IHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4udHdpdHRlciB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTZweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMHB4O1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxufVxcclxcbi5tZWRpdW0ge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG59XFxyXFxuLmxpbmsge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxyXFxufVxcclxcbi5saW5rIGEge1xcclxcbiAgY29sb3I6ICM0NDQyNDc7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5saW5rIGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICM3Nzc1Nzk7XFxyXFxufVxcclxcbi5lbWFpbC5leHBhbmQge1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBvdmVyZmxvdzogb3ZlcmxheTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTAwcHg7XFxyXFxuICByaWdodDogMjUwcHg7XFxyXFxufVxcclxcbi5leHBhbmQgLmZyb20ge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSk7XFxyXFxufVxcclxcbi5leHBhbmQgLmZyb20tY29udGVudHMge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjkxKTtcXHJcXG59XFxyXFxuLmV4cGFuZCAudG8ge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcbi5leHBhbmQgLnRvLWNvbnRlbnRzIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ys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Q2I7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsd0RBQXdEO0VBQ3hELFVBQVU7QUFDWjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseURBQXlEO0VBQ3pELFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlFQUF5RTtFQUN6RSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtFQUNWLG9EQUFvRDtBQUN0RDtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsMERBQTBEO0FBQzVEO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw4MDBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogI2Y2ZjVmNztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICAvKiBtYXJnaW46IC0yMHB4IDAgNTBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICBtYXJnaW46IDIwcHggMCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIG1hcmdpbjogMTVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjRiMmI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0YjJiO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IDEycHggNDVweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmdob3N0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDAgNTBweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEycHggMTVweDtcXHJcXG4gIG1hcmdpbjogOHB4IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDc2OHB4O1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogNDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tY29udGFpbmVyIHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItaW4tY29udGFpbmVyIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLnNpZ24taW4tY29udGFpbmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtY29udGFpbmVyIHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zaWduLXVwLWNvbnRhaW5lciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgei1pbmRleDogNTtcXHJcXG4gIGFuaW1hdGlvbjogc2hvdyAwLjZzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNob3cge1xcclxcbiAgMCUsXFxyXFxuICA0OS45OSUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlLFxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5LWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXkge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmNDE2YztcXHJcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY0YjJiLCAjZmY0MTZjKTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmNGIyYiwgI2ZmNDE2Yyk7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogLTEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMjAwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktcGFuZWwge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAwIDQwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5LWxlZnQge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1sZWZ0IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktcmlnaHQge1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LXJpZ2h0IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtY29udGFpbmVyIGEge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIDVweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGkge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGEge1xcclxcbiAgY29sb3I6ICMzYzk3YmY7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIGZyb20gaGVyZSBpdCB3aWxsIGJlIHRoZSBidXR0b24gKi9cXHJcXG5cXHJcXG4ubWUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3AtYW8uc2hvcnRwaXhlbC5haS9jbGllbnQvdG9fYXV0byxxX2dsb3NzeSxyZXRfaW1nL2h0dHBzOi8vZGVtby5hY2Nlc3NwcmVzc3RoZW1lcy5jb20vd29yZHByZXNzLXBsdWdpbnMvc21hcnQtbG9nby1zaG93Y2FzZS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMS9zbWFydC1sb2dvLXNob3djYXNlLWxpc3QtbGF5b3V0LnBuZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuc2Vjb25kLWNvbnRhaW5lciB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogI2YxZWVmMTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQxZDQ7XFxyXFxuXFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAzNjBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDM2MHB4O1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uZW1haWwge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmNGIyYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDE2MnB4O1xcclxcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXFxyXFxuICAgIGhlaWdodCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLFxcclxcbiAgICBib3gtc2hhZG93IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXFxyXFxuICAgIGJvcmRlci1yYWRpdXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG59XFxyXFxuLmVtYWlsOm5vdCguZXhwYW5kKSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5lbWFpbDpub3QoLmV4cGFuZCk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmNTIzNDtcXHJcXG59XFxyXFxuLmZyb20ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyAxMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcXHJcXG59XFxyXFxuLmZyb20tY29udGVudHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG59XFxyXFxuLnRvIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpO1xcclxcbn1cXHJcXG4udG8tY29udGVudHMge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjU1KTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcclxcbn1cXHJcXG4uYXZhdGFyIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDhweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAyNHB4O1xcclxcbn1cXHJcXG4ubmFtZSB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogNDBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcbi50b3Age1xcclxcbiAgYmFja2dyb3VuZDogI2ZmNGIyYjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxufVxcclxcbi5hdmF0YXItbGFyZ2Uge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjFweDtcXHJcXG4gIGhlaWdodDogNDJweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAxNHB4O1xcclxcbiAgd2lkdGg6IDQycHg7XFxyXFxufVxcclxcbi5uYW1lLWxhcmdlIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcbi54LXRvdWNoIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbn1cXHJcXG4ueCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYmE4N2Y5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG4ueC10b3VjaDpob3ZlciAueCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjY2I5YWZiO1xcclxcbn1cXHJcXG4ubGluZTEge1xcclxcbiAgYmFja2dyb3VuZDogIzY0MjJlYjtcXHJcXG4gIGhlaWdodDogMTJweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5cHgpIHRyYW5zbGF0ZVkoNHB4KSByb3RhdGUoNDVkZWcpO1xcclxcbiAgd2lkdGg6IDJweDtcXHJcXG59XFxyXFxuLmxpbmUyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM2NDIyZWI7XFxyXFxuICBoZWlnaHQ6IDEycHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOXB4KSB0cmFuc2xhdGVZKDRweCkgcm90YXRlKC00NWRlZyk7XFxyXFxuICB3aWR0aDogMnB4O1xcclxcbn1cXHJcXG4uYm90dG9tIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBjb2xvcjogIzQ0NDI0NztcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbn1cXHJcXG4ucm93IHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4udHdpdHRlciB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTZweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMHB4O1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxufVxcclxcbi5tZWRpdW0ge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG59XFxyXFxuLmxpbmsge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxyXFxufVxcclxcbi5saW5rIGEge1xcclxcbiAgY29sb3I6ICM0NDQyNDc7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5saW5rIGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICM3Nzc1Nzk7XFxyXFxufVxcclxcbi5lbWFpbC5leHBhbmQge1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBvdmVyZmxvdzogb3ZlcmxheTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTAwcHg7XFxyXFxuICByaWdodDogMjUwcHg7XFxyXFxufVxcclxcbi5leHBhbmQgLmZyb20ge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSk7XFxyXFxufVxcclxcbi5leHBhbmQgLmZyb20tY29udGVudHMge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjkxKTtcXHJcXG59XFxyXFxuLmV4cGFuZCAudG8ge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgMTAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcbi5leHBhbmQgLnRvLWNvbnRlbnRzIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21Gcm9tU2VlZCA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQnKTtcblxudmFyIE9SSUdJTkFMID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXy0nO1xudmFyIGFscGhhYmV0O1xudmFyIHByZXZpb3VzU2VlZDtcblxudmFyIHNodWZmbGVkO1xuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBzaHVmZmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBpZiAoIV9hbHBoYWJldF8pIHtcbiAgICAgICAgaWYgKGFscGhhYmV0ICE9PSBPUklHSU5BTCkge1xuICAgICAgICAgICAgYWxwaGFiZXQgPSBPUklHSU5BTDtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfID09PSBhbHBoYWJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8ubGVuZ3RoICE9PSBPUklHSU5BTC5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gWW91IHN1Ym1pdHRlZCAnICsgX2FscGhhYmV0Xy5sZW5ndGggKyAnIGNoYXJhY3RlcnM6ICcgKyBfYWxwaGFiZXRfKTtcbiAgICB9XG5cbiAgICB2YXIgdW5pcXVlID0gX2FscGhhYmV0Xy5zcGxpdCgnJykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZCwgYXJyKXtcbiAgICAgICByZXR1cm4gaW5kICE9PSBhcnIubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfSk7XG5cbiAgICBpZiAodW5pcXVlLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBUaGVzZSBjaGFyYWN0ZXJzIHdlcmUgbm90IHVuaXF1ZTogJyArIHVuaXF1ZS5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBhbHBoYWJldCA9IF9hbHBoYWJldF87XG4gICAgcmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKTtcbiAgICByZXR1cm4gYWxwaGFiZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoc2VlZCkge1xuICAgIHJhbmRvbUZyb21TZWVkLnNlZWQoc2VlZCk7XG4gICAgaWYgKHByZXZpb3VzU2VlZCAhPT0gc2VlZCkge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBwcmV2aW91c1NlZWQgPSBzZWVkO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSgpIHtcbiAgICBpZiAoIWFscGhhYmV0KSB7XG4gICAgICAgIHNldENoYXJhY3RlcnMoT1JJR0lOQUwpO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VBcnJheSA9IGFscGhhYmV0LnNwbGl0KCcnKTtcbiAgICB2YXIgdGFyZ2V0QXJyYXkgPSBbXTtcbiAgICB2YXIgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgIHZhciBjaGFyYWN0ZXJJbmRleDtcblxuICAgIHdoaWxlIChzb3VyY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICAgICAgY2hhcmFjdGVySW5kZXggPSBNYXRoLmZsb29yKHIgKiBzb3VyY2VBcnJheS5sZW5ndGgpO1xuICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUFycmF5LnNwbGljZShjaGFyYWN0ZXJJbmRleCwgMSlbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0QXJyYXkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNodWZmbGVkKCkge1xuICAgIGlmIChzaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfVxuICAgIHNodWZmbGVkID0gc2h1ZmZsZSgpO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbn1cblxuLyoqXG4gKiBsb29rdXAgc2h1ZmZsZWQgbGV0dGVyXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2t1cChpbmRleCkge1xuICAgIHZhciBhbHBoYWJldFNodWZmbGVkID0gZ2V0U2h1ZmZsZWQoKTtcbiAgICByZXR1cm4gYWxwaGFiZXRTaHVmZmxlZFtpbmRleF07XG59XG5cbmZ1bmN0aW9uIGdldCAoKSB7XG4gIHJldHVybiBhbHBoYWJldCB8fCBPUklHSU5BTDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZ2V0OiBnZXQsXG4gICAgY2hhcmFjdGVyczogY2hhcmFjdGVycyxcbiAgICBzZWVkOiBzZXRTZWVkLFxuICAgIGxvb2t1cDogbG9va3VwLFxuICAgIHNodWZmbGVkOiBnZXRTaHVmZmxlZFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdlbmVyYXRlID0gcmVxdWlyZSgnLi9nZW5lcmF0ZScpO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vLyBJZ25vcmUgYWxsIG1pbGxpc2Vjb25kcyBiZWZvcmUgYSBjZXJ0YWluIHRpbWUgdG8gcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBkYXRlIGVudHJvcHkgd2l0aG91dCBzYWNyaWZpY2luZyB1bmlxdWVuZXNzLlxuLy8gVGhpcyBudW1iZXIgc2hvdWxkIGJlIHVwZGF0ZWQgZXZlcnkgeWVhciBvciBzbyB0byBrZWVwIHRoZSBnZW5lcmF0ZWQgaWQgc2hvcnQuXG4vLyBUbyByZWdlbmVyYXRlIGBuZXcgRGF0ZSgpIC0gMGAgYW5kIGJ1bXAgdGhlIHZlcnNpb24uIEFsd2F5cyBidW1wIHRoZSB2ZXJzaW9uIVxudmFyIFJFRFVDRV9USU1FID0gMTU2Nzc1MjgwMjA2MjtcblxuLy8gZG9uJ3QgY2hhbmdlIHVubGVzcyB3ZSBjaGFuZ2UgdGhlIGFsZ29zIG9yIFJFRFVDRV9USU1FXG4vLyBtdXN0IGJlIGFuIGludGVnZXIgYW5kIGxlc3MgdGhhbiAxNlxudmFyIHZlcnNpb24gPSA3O1xuXG4vLyBDb3VudGVyIGlzIHVzZWQgd2hlbiBzaG9ydGlkIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBpbiBvbmUgc2Vjb25kLlxudmFyIGNvdW50ZXI7XG5cbi8vIFJlbWVtYmVyIHRoZSBsYXN0IHRpbWUgc2hvcnRpZCB3YXMgY2FsbGVkIGluIGNhc2UgY291bnRlciBpcyBuZWVkZWQuXG52YXIgcHJldmlvdXNTZWNvbmRzO1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gYnVpbGQoY2x1c3RlcldvcmtlcklkKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChEYXRlLm5vdygpIC0gUkVEVUNFX1RJTUUpICogMC4wMDEpO1xuXG4gICAgaWYgKHNlY29uZHMgPT09IHByZXZpb3VzU2Vjb25kcykge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgIHByZXZpb3VzU2Vjb25kcyA9IHNlY29uZHM7XG4gICAgfVxuXG4gICAgc3RyID0gc3RyICsgZ2VuZXJhdGUodmVyc2lvbik7XG4gICAgc3RyID0gc3RyICsgZ2VuZXJhdGUoY2x1c3RlcldvcmtlcklkKTtcbiAgICBpZiAoY291bnRlciA+IDApIHtcbiAgICAgICAgc3RyID0gc3RyICsgZ2VuZXJhdGUoY291bnRlcik7XG4gICAgfVxuICAgIHN0ciA9IHN0ciArIGdlbmVyYXRlKHNlY29uZHMpO1xuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcbnZhciByYW5kb20gPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tYnl0ZScpO1xudmFyIGZvcm1hdCA9IHJlcXVpcmUoJ25hbm9pZC9mb3JtYXQnKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGUobnVtYmVyKSB7XG4gICAgdmFyIGxvb3BDb3VudGVyID0gMDtcbiAgICB2YXIgZG9uZTtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICBzdHIgPSBzdHIgKyBmb3JtYXQocmFuZG9tLCBhbHBoYWJldC5nZXQoKSwgMSk7XG4gICAgICAgIGRvbmUgPSBudW1iZXIgPCAoTWF0aC5wb3coMTYsIGxvb3BDb3VudGVyICsgMSApICk7XG4gICAgICAgIGxvb3BDb3VudGVyKys7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcbnZhciBidWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcbnZhciBpc1ZhbGlkID0gcmVxdWlyZSgnLi9pcy12YWxpZCcpO1xuXG4vLyBpZiB5b3UgYXJlIHVzaW5nIGNsdXN0ZXIgb3IgbXVsdGlwbGUgc2VydmVycyB1c2UgdGhpcyB0byBtYWtlIGVhY2ggaW5zdGFuY2Vcbi8vIGhhcyBhIHVuaXF1ZSB2YWx1ZSBmb3Igd29ya2VyXG4vLyBOb3RlOiBJIGRvbid0IGtub3cgaWYgdGhpcyBpcyBhdXRvbWF0aWNhbGx5IHNldCB3aGVuIHVzaW5nIHRoaXJkXG4vLyBwYXJ0eSBjbHVzdGVyIHNvbHV0aW9ucyBzdWNoIGFzIHBtMi5cbnZhciBjbHVzdGVyV29ya2VySWQgPSByZXF1aXJlKCcuL3V0aWwvY2x1c3Rlci13b3JrZXItaWQnKSB8fCAwO1xuXG4vKipcbiAqIFNldCB0aGUgc2VlZC5cbiAqIEhpZ2hseSByZWNvbW1lbmRlZCBpZiB5b3UgZG9uJ3Qgd2FudCBwZW9wbGUgdG8gdHJ5IHRvIGZpZ3VyZSBvdXQgeW91ciBpZCBzY2hlbWEuXG4gKiBleHBvc2VkIGFzIHNob3J0aWQuc2VlZChpbnQpXG4gKiBAcGFyYW0gc2VlZCBJbnRlZ2VyIHZhbHVlIHRvIHNlZWQgdGhlIHJhbmRvbSBhbHBoYWJldC4gIEFMV0FZUyBVU0UgVEhFIFNBTUUgU0VFRCBvciB5b3UgbWlnaHQgZ2V0IG92ZXJsYXBzLlxuICovXG5mdW5jdGlvbiBzZWVkKHNlZWRWYWx1ZSkge1xuICAgIGFscGhhYmV0LnNlZWQoc2VlZFZhbHVlKTtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjbHVzdGVyIHdvcmtlciBvciBtYWNoaW5lIGlkXG4gKiBleHBvc2VkIGFzIHNob3J0aWQud29ya2VyKGludClcbiAqIEBwYXJhbSB3b3JrZXJJZCB3b3JrZXIgbXVzdCBiZSBwb3NpdGl2ZSBpbnRlZ2VyLiAgTnVtYmVyIGxlc3MgdGhhbiAxNiBpcyByZWNvbW1lbmRlZC5cbiAqIHJldHVybnMgc2hvcnRpZCBtb2R1bGUgc28gaXQgY2FuIGJlIGNoYWluZWQuXG4gKi9cbmZ1bmN0aW9uIHdvcmtlcih3b3JrZXJJZCkge1xuICAgIGNsdXN0ZXJXb3JrZXJJZCA9IHdvcmtlcklkO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKlxuICogc2V0cyBuZXcgY2hhcmFjdGVycyB0byB1c2UgaW4gdGhlIGFscGhhYmV0XG4gKiByZXR1cm5zIHRoZSBzaHVmZmxlZCBhbHBoYWJldFxuICovXG5mdW5jdGlvbiBjaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpIHtcbiAgICBpZiAobmV3Q2hhcmFjdGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFscGhhYmV0LmNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFscGhhYmV0LnNodWZmbGVkKCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgcmV0dXJuIGJ1aWxkKGNsdXN0ZXJXb3JrZXJJZCk7XG59XG5cbi8vIEV4cG9ydCBhbGwgb3RoZXIgZnVuY3Rpb25zIGFzIHByb3BlcnRpZXMgb2YgdGhlIGdlbmVyYXRlIGZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGUgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLnNlZWQgPSBzZWVkO1xubW9kdWxlLmV4cG9ydHMud29ya2VyID0gd29ya2VyO1xubW9kdWxlLmV4cG9ydHMuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG5tb2R1bGUuZXhwb3J0cy5pc1ZhbGlkID0gaXNWYWxpZDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuZnVuY3Rpb24gaXNTaG9ydElkKGlkKSB7XG4gICAgaWYgKCFpZCB8fCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkLmxlbmd0aCA8IDYgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbm9uQWxwaGFiZXRpYyA9IG5ldyBSZWdFeHAoJ1teJyArXG4gICAgICBhbHBoYWJldC5nZXQoKS5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKSArXG4gICAgJ10nKTtcbiAgICByZXR1cm4gIW5vbkFscGhhYmV0aWMudGVzdChpZCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTaG9ydElkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3J5cHRvID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKTsgLy8gSUUgMTEgdXNlcyB3aW5kb3cubXNDcnlwdG9cblxudmFyIHJhbmRvbUJ5dGU7XG5cbmlmICghY3J5cHRvIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgcmFuZG9tQnl0ZSA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgICAgdmFyIGJ5dGVzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBieXRlcztcbiAgICB9O1xufSBlbHNlIHtcbiAgICByYW5kb21CeXRlID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgICByZXR1cm4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSk7XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByYW5kb21CeXRlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBGb3VuZCB0aGlzIHNlZWQtYmFzZWQgcmFuZG9tIGdlbmVyYXRvciBzb21ld2hlcmVcbi8vIEJhc2VkIG9uIFRoZSBDZW50cmFsIFJhbmRvbWl6ZXIgMS4zIChDKSAxOTk3IGJ5IFBhdWwgSG91bGUgKGhvdWxlQG1zYy5jb3JuZWxsLmVkdSlcblxudmFyIHNlZWQgPSAxO1xuXG4vKipcbiAqIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzZWVkXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dFZhbHVlKCkge1xuICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgcmV0dXJuIHNlZWQvKDIzMzI4MC4wKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChfc2VlZF8pIHtcbiAgICBzZWVkID0gX3NlZWRfO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuZXh0VmFsdWU6IGdldE5leHRWYWx1ZSxcbiAgICBzZWVkOiBzZXRTZWVkXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IDA7XG4iLCIvLyBUaGlzIGZpbGUgcmVwbGFjZXMgYGZvcm1hdC5qc2AgaW4gYnVuZGxlcnMgbGlrZSB3ZWJwYWNrIG9yIFJvbGx1cCxcbi8vIGFjY29yZGluZyB0byBgYnJvd3NlcmAgY29uZmlnIGluIGBwYWNrYWdlLmpzb25gLlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChyYW5kb20sIGFscGhhYmV0LCBzaXplKSB7XG4gIC8vIFdlIGNhbuKAmXQgdXNlIGJ5dGVzIGJpZ2dlciB0aGFuIHRoZSBhbHBoYWJldC4gVG8gbWFrZSBieXRlcyB2YWx1ZXMgY2xvc2VyXG4gIC8vIHRvIHRoZSBhbHBoYWJldCwgd2UgYXBwbHkgYml0bWFzayBvbiB0aGVtLiBXZSBsb29rIGZvciB0aGUgY2xvc2VzdFxuICAvLyBgMiAqKiB4IC0gMWAgbnVtYmVyLCB3aGljaCB3aWxsIGJlIGJpZ2dlciB0aGFuIGFscGhhYmV0IHNpemUuIElmIHdlIGhhdmVcbiAgLy8gMzAgc3ltYm9scyBpbiB0aGUgYWxwaGFiZXQsIHdlIHdpbGwgdGFrZSAzMSAoMDAwMTExMTEpLlxuICAvLyBXZSBkbyBub3QgdXNlIGZhc3RlciBNYXRoLmNsejMyLCBiZWNhdXNlIGl0IGlzIG5vdCBhdmFpbGFibGUgaW4gYnJvd3NlcnMuXG4gIHZhciBtYXNrID0gKDIgPDwgTWF0aC5sb2coYWxwaGFiZXQubGVuZ3RoIC0gMSkgLyBNYXRoLkxOMikgLSAxXG4gIC8vIEJpdG1hc2sgaXMgbm90IGEgcGVyZmVjdCBzb2x1dGlvbiAoaW4gb3VyIGV4YW1wbGUgaXQgd2lsbCBwYXNzIDMxIGJ5dGVzLFxuICAvLyB3aGljaCBpcyBiaWdnZXIgdGhhbiB0aGUgYWxwaGFiZXQpLiBBcyBhIHJlc3VsdCwgd2Ugd2lsbCBuZWVkIG1vcmUgYnl0ZXMsXG4gIC8vIHRoYW4gSUQgc2l6ZSwgYmVjYXVzZSB3ZSB3aWxsIHJlZnVzZSBieXRlcyBiaWdnZXIgdGhhbiB0aGUgYWxwaGFiZXQuXG5cbiAgLy8gRXZlcnkgaGFyZHdhcmUgcmFuZG9tIGdlbmVyYXRvciBjYWxsIGlzIGNvc3RseSxcbiAgLy8gYmVjYXVzZSB3ZSBuZWVkIHRvIHdhaXQgZm9yIGVudHJvcHkgY29sbGVjdGlvbi4gVGhpcyBpcyB3aHkgb2Z0ZW4gaXQgd2lsbFxuICAvLyBiZSBmYXN0ZXIgdG8gYXNrIGZvciBmZXcgZXh0cmEgYnl0ZXMgaW4gYWR2YW5jZSwgdG8gYXZvaWQgYWRkaXRpb25hbCBjYWxscy5cblxuICAvLyBIZXJlIHdlIGNhbGN1bGF0ZSBob3cgbWFueSByYW5kb20gYnl0ZXMgc2hvdWxkIHdlIGNhbGwgaW4gYWR2YW5jZS5cbiAgLy8gSXQgZGVwZW5kcyBvbiBJRCBsZW5ndGgsIG1hc2sgLyBhbHBoYWJldCBzaXplIGFuZCBtYWdpYyBudW1iZXIgMS42XG4gIC8vICh3aGljaCB3YXMgc2VsZWN0ZWQgYWNjb3JkaW5nIGJlbmNobWFya3MpLlxuXG4gIC8vIC1+ZiA9PiBNYXRoLmNlaWwoZikgaWYgbiBpcyBmbG9hdCBudW1iZXJcbiAgLy8gLX5pID0+IGkgKyAxIGlmIG4gaXMgaW50ZWdlciBudW1iZXJcbiAgdmFyIHN0ZXAgPSAtfigxLjYgKiBtYXNrICogc2l6ZSAvIGFscGhhYmV0Lmxlbmd0aClcbiAgdmFyIGlkID0gJydcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHZhciBieXRlcyA9IHJhbmRvbShzdGVwKVxuICAgIC8vIENvbXBhY3QgYWx0ZXJuYXRpdmUgZm9yIGBmb3IgKHZhciBpID0gMDsgaSA8IHN0ZXA7IGkrKylgXG4gICAgdmFyIGkgPSBzdGVwXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgLy8gSWYgcmFuZG9tIGJ5dGUgaXMgYmlnZ2VyIHRoYW4gYWxwaGFiZXQgZXZlbiBhZnRlciBiaXRtYXNrLFxuICAgICAgLy8gd2UgcmVmdXNlIGl0IGJ5IGB8fCAnJ2AuXG4gICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tpXSAmIG1hc2tdIHx8ICcnXG4gICAgICAvLyBNb3JlIGNvbXBhY3QgdGhhbiBgaWQubGVuZ3RoICsgMSA9PT0gc2l6ZWBcbiAgICAgIGlmIChpZC5sZW5ndGggPT09ICtzaXplKSByZXR1cm4gaWRcbiAgICB9XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcclxuY29uc3Qgc2hvcnRpZCA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpO1xyXG5jb25zdCBub3R5ZiA9IG5ldyBOb3R5ZigpO1xyXG5cclxuY29uc3Qgc2lnblVwQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduVXBcIik7XHJcbmNvbnN0IHNpZ25JbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbkluXCIpO1xyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcclxuXHJcbmNvbnN0IHNpZ25VcERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbnVwLWRpdlwiKTtcclxuY29uc3QgbG9naW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLWRpdlwiKTtcclxuY29uc3Qgb3ZlcmxheURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheS1kaXZcIik7XHJcbmNvbnN0IHVzZXJJbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1pblwiKTtcclxuY29uc3QgZ3Vlc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1ZXN0XCIpO1xyXG5cclxuc2lnblVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyaWdodC1wYW5lbC1hY3RpdmVcIik7XHJcbn0pO1xyXG5cclxuc2lnbkluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJyaWdodC1wYW5lbC1hY3RpdmVcIik7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2hvd1VzZXJQYW5lbCh1c2VybmFtZSkge1xyXG4gIHNpZ25VcERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgbG9naW5EaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIG92ZXJsYXlEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIHVzZXJJbkRpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3Vlc3ROYW1lXCIpLnRleHRDb250ZW50ID0gdXNlcm5hbWU7XHJcbiAgc2hvd1VzZXJQYW5lcmxCdXR0b25zKCk7XHJcbn1cclxuZnVuY3Rpb24gc2hvd1VzZXJQYW5lcmxCdXR0b25zKCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbi11cC11c2VyLWluXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctbGlzdC11c2VyLWluXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvdXQtdXNlci1pblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb3V0LXVzZXItaW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgcmVzZXRJbnB1dEZpZWxkcygpO1xyXG4gICAgaGlkZVVzZXJQYW5lbCgpO1xyXG4gICAgaGlkZVVzZXJQYW5lcmxCdXR0b25zKCk7XHJcbiAgICBub3R5Zi5zdWNjZXNzKFwiTG9nZ2VkIE91dCBTdWNjZXNzZnVsbHkhXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlVXNlclBhbmVsKCkge1xyXG4gIHNpZ25VcERpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGxvZ2luRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgb3ZlcmxheURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIHVzZXJJbkRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVVc2VyUGFuZXJsQnV0dG9ucygpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ24tdXAtdXNlci1pblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvdy1saXN0LXVzZXItaW5cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb3V0LXVzZXItaW5cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbi11cC11c2VyLWluXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIHJlc2V0SW5wdXRGaWVsZHMoKTtcclxuICAgIGhpZGVVc2VyUGFuZWwoKTtcclxuICAgIGhpZGVVc2VyUGFuZXJsQnV0dG9ucygpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyaWdodC1wYW5lbC1hY3RpdmVcIik7XHJcbiAgICBub3R5Zi5zdWNjZXNzKFwiTG9nZ2VkIG91dCB0byBTaWduLXVwIEFyZWFcIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0SW5wdXRGaWVsZHMoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG9ydGVuVXJsXCIpLnZhbHVlID0gXCJcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yaWdpbmFsVXJsXCIpLnZhbHVlID0gXCJcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLWVtYWlsXCIpLnZhbHVlID0gXCJcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLXBhc3N3b3JkXCIpLnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxuZ3Vlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHNob3dVc2VyUGFuZWwoXCJHdWVzdFwiKTtcclxuICBoaWRlVXNlclBhbmVybEJ1dHRvbnMoKTtcclxuICBub3R5Zi5zdWNjZXNzKFwiV2VsY29tZSwgTmV3IEd1ZXN0IVwiKTtcclxufSk7XHJcblxyXG4vKlxyXG4gIG1pbmltdW0gZnVuY3Rpb25hbGl0eSByZXF1aXJlbWVudCAtIEdldXN0IFBhZ2Ugd2lsbCBiZSBhYmxlIHRvIHNob3J0ZW4gYSB1cmxcclxuKi9cclxuLy8gaWRzOiBjb252ZXJ0LCBvcmlnaW5hbFVybCwgc2hvcnRlblVybFxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnZlcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJndWVzdE5hbWVcIikudGV4dENvbnRlbnQ7XHJcbiAgY29uc3Qgb3JpZ2luYWxVcmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yaWdpbmFsVXJsXCIpO1xyXG4gIGNvbnN0IHNob3J0ZW5VcmwgPSBcIi9hcGkvc2hvcnR1cmwgXCI7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNob3J0ZW5PcmlnaW5hbFVybCA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBzaG9ydGVuVXJsLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdXJsOiBvcmlnaW5hbFVybC52YWx1ZSxcclxuICAgICAgICBzaG9ydGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgdXNlcm5hbWU6IGN1cnJlbnRVc2VyLFxyXG4gICAgICB9LFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHNob3dTaG9ydFVybChzaG9ydGVuT3JpZ2luYWxVcmwpO1xyXG4gICAgbm90eWYuc3VjY2VzcyhcIkNvbnZlcnRlZCBTdWNjZXNzZnVsbHkhXCIpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgbm90eWYuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNob3dTaG9ydFVybChSZXNwb25zZUpzb24pIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwic2hvcnRlblVybFwiXHJcbiAgKS52YWx1ZSA9IGBodHRwczovL2N5YnItdXJsLXNob3J0ZW5lci5oZXJva3VhcHAuY29tL2N5YnIvJHtSZXNwb25zZUpzb24uZGF0YS5zaG9ydHVybH1gO1xyXG59XHJcblxyXG4vKlxyXG4gIExvZ2luIGEgdXNlclxyXG4qL1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgbG9naW5FbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tZW1haWxcIikudmFsdWU7XHJcbiAgY29uc3QgbG9naW5QYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tcGFzc3dvcmRcIikudmFsdWU7XHJcbiAgY29uc3QgbG9naW5VcmwgPSBcIi91c2VyL2xvZ2luXCI7XHJcbiAgaWYgKGxvZ2luRW1haWwubGVuZ3RoID4gNiAmJiBsb2dpblBhc3N3b3JkLmxlbmd0aCA+IDApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGxvZ2luQXR0ZW1wdCA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogbG9naW5VcmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgZW1haWw6IGxvZ2luRW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZDogbG9naW5QYXNzd29yZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAobG9naW5BdHRlbXB0LnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgc2hvd1VzZXJQYW5lbChsb2dpbkF0dGVtcHQuZGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgbm90eWYuc3VjY2VzcyhcIlN1Y2Nlc3NmdWwgTG9naW4hXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgbm90eWYuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG5vdHlmLmVycm9yKFwicGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWxcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qXHJcbiAgc2lnbiB1cCBhIHVzZXJcclxuKi9cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduLXVwXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xyXG4gIGNvbnN0IHNpZ25VcE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ24tdXAtbmFtZVwiKS52YWx1ZTtcclxuICBjb25zdCBzaWduVXBFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbi11cC1lbWFpbFwiKS52YWx1ZTtcclxuICBjb25zdCBzaWduVXBQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbi11cC1wYXNzd29yZFwiKS52YWx1ZTtcclxuICBjb25zdCBzaWduVXBVcmwgPSBcIi91c2VyL3NpZ24tdXBcIjtcclxuICBpZiAoc2lnblVwTmFtZS5sZW5ndGggPiAwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzaWduVXBBdHRlbXB0ID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBzaWduVXBVcmwsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogc2lnblVwTmFtZSxcclxuICAgICAgICAgIGVtYWlsOiBzaWduVXBFbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiBzaWduVXBQYXNzd29yZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoc2lnblVwQXR0ZW1wdC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIG5vdHlmLnN1Y2Nlc3Moc2lnblVwQXR0ZW1wdC5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwicmlnaHQtcGFuZWwtYWN0aXZlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgbm90eWYuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG5vdHlmLmVycm9yKFwicGxlYXNlIGVudGVyIHZhbGlkIGluZm9ybWF0aW9uXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKlxyXG4gIHVzZXIgaXMgYWJsZSB0byBzZWUgYWxsIGhpcyBzaG9ydGVuIHVybHNcclxuKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJvdyhsaW5rKSB7XHJcbiAgY29uc3QgcGFyZW50RGl2Qm90dG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3R0b21cIik7XHJcbiAgLy8gY3JlYXRlIHRoZSByb3dcclxuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xyXG4gIGNvbnN0IHJvd0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJvd0xpbmsuY2xhc3NMaXN0LmFkZChcImxpbmtcIik7XHJcbiAgY29uc3QgbmV3bGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIG5ld2xpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBsaW5rKTtcclxuICBuZXdsaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcclxuICBuZXdsaW5rLnRleHRDb250ZW50ID0gbGluaztcclxuXHJcbiAgLy8gYXBwZW5kIGFsbCB0b2dldGhlclxyXG4gIHJvd0xpbmsuYXBwZW5kKG5ld2xpbmspO1xyXG4gIHJvdy5hcHBlbmQocm93TGluayk7XHJcbiAgcGFyZW50RGl2Qm90dG9tLmFwcGVuZChyb3cpO1xyXG59XHJcblxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiLnNlY29uZC1jb250YWluZXJcIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3Vlc3ROYW1lXCIpLnRleHRDb250ZW50O1xyXG4gICAgY29uc3QgYWxsU2hvcnRVcmxzID0gXCIvdXNlci9hbGwtc2hvcnQtdXJsc1wiO1xyXG4gICAgY29uc3QgZ2V0VXNlckRhdGEgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBhbGxTaG9ydFVybHMsXHJcbiAgICAgIGRhdGE6IHt9LFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgdXNlcm5hbWU6IGN1cnJlbnRVc2VyLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBpZiAoZ2V0VXNlckRhdGEuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IHVybCBvZiBnZXRVc2VyRGF0YS5kYXRhKSB7XHJcbiAgICAgICAgY3JlYXRlUm93KFxyXG4gICAgICAgICAgYGh0dHBzOi8vY3lici11cmwtc2hvcnRlbmVyLmhlcm9rdWFwcC5jb20vY3lici8ke3VybC5zaG9ydHVybH1gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBub3R5Zi5zdWNjZXNzKFwiU3VjY2VzcyFcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub3R5Zi5lcnJvcihcIm5vIHByZXZpb3VzIGxpbmtzXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=