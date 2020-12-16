"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */


function _default()
/* { store, ssrContext } */
{
  var Router = new _vueRouter["default"]({
    // scrollBehavior: () => ({ x: 0, y: 0 }),
    scrollBehavior: function scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        var position = {};

        if (to.hash) {
          position.selector = to.hash;
          position.offset = {
            y: 50
          }; // position.behavior = 'smooth'

          if (document.querySelector(to.hash)) {
            return position;
          }

          return false; // return { x: 0, y: 0 }
        }
      }
    },
    routes: _routes["default"],
    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });
  return Router;
}