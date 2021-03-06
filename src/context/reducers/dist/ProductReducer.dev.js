"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addProductAction = require("../actions/addProductAction");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(state, action) {
  switch (action.type) {
    case _addProductAction.productAction.GET_PRODUCT_SUCESSFULL:
      return _objectSpread({}, state, {
        error: false,
        allProduct: action.data
      });

    case _addProductAction.productAction.GET_PRODUCT_UNSUCESSFULL:
      return _objectSpread({}, state, {
        error: true,
        allProduct: action.data
      });

    case _addProductAction.productAction.START_LOADING:
      return _objectSpread({}, state, {
        showLoading: action.data
      });

    case _addProductAction.productAction.STOP_LOADING:
      return _objectSpread({}, state, {
        showLoading: action.data
      });

    case _addProductAction.productAction.ADD_PRODUCT_SUCESS:
      return _objectSpread({}, state, {
        error: false,
        allProduct: [].concat(_toConsumableArray(state.allProduct || []), [action.data])
      });

    case _addProductAction.productAction.ADD_PRODUCT_FAIL:
      return _objectSpread({}, state, {
        erro: true,
        allProduct: action.data
      });

    case _addProductAction.productAction.UPDATE_PRODUCT_SUCESSFULL:
      var updatedId = action.data;
      var updatedProducts = state.allProduct.map(function (m) {
        if (m._id === updatedId._id) {
          return updatedId;
        } else {
          return m;
        }
      });
      return _objectSpread({}, state, {
        error: false,
        allProduct: updatedProducts
      });

    case _addProductAction.productAction.GOT_PRODUCT_ID_SUCESSFULL:
      return _objectSpread({}, state, {
        error: false,
        lastObjectCount: action.data
      });

    case _addProductAction.productAction.GOT_PRODUCT_ID_UN_SUCESSFULL:
      return _objectSpread({}, state, {
        error: true,
        lastObjectCount: action.data
      });

    default:
      return state;
  }
};

exports.default = _default;