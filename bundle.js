(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@buttercloud/theme-builder-master-components/src/components/Text'), require('@buttercloud/theme-builder-master-components/src/components/Image'), require('@buttercloud/theme-builder-master-components/src/components/Products')) :
  typeof define === 'function' && define.amd ? define(['exports', '@buttercloud/theme-builder-master-components/src/components/Text', '@buttercloud/theme-builder-master-components/src/components/Image', '@buttercloud/theme-builder-master-components/src/components/Products'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myBundle = {}, global.Text, global.Image, global.Products));
}(this, (function (exports, Text, Image, Products) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Text__default = /*#__PURE__*/_interopDefaultLegacy(Text);
  var Image__default = /*#__PURE__*/_interopDefaultLegacy(Image);
  var Products__default = /*#__PURE__*/_interopDefaultLegacy(Products);



  Object.defineProperty(exports, 'Text', {
    enumerable: true,
    get: function () {
      return Text__default['default'];
    }
  });
  Object.defineProperty(exports, 'Image', {
    enumerable: true,
    get: function () {
      return Image__default['default'];
    }
  });
  Object.defineProperty(exports, 'Products', {
    enumerable: true,
    get: function () {
      return Products__default['default'];
    }
  });

  Object.defineProperty(exports, '__esModule', { value: true });

})));
