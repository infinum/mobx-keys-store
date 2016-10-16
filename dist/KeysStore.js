module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class;

	var _mobx = __webpack_require__(1);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var KeysStore = (_class = function () {

	  /**
	   * Initialize the store
	   *
	   * @param {Object} initialState - The initial store state
	   * @return {Object} Store instance
	   */
	  function KeysStore(initialState) {
	    _classCallCheck(this, KeysStore);

	    this._initData(initialState);
	  }

	  /**
	   * Method for setting the initial state of the model
	   *
	   * @private
	   * @param {Object} [initialState={}] - Initial state that should be set
	   */


	  _createClass(KeysStore, [{
	    key: '_initData',
	    value: function _initData() {
	      var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      (0, _mobx.extendObservable)(this, initialState);
	    }

	    /**
	     * Set a key
	     *
	     * @param {String} key - Key that needs to be saved
	     * @param {Mixed} value - Value to be saved
	     * @return {undefined}
	     */

	  }, {
	    key: 'setItem',
	    value: function setItem(key, value) {
	      (0, _mobx.extendObservable)(this, _defineProperty({}, key, value));
	    }

	    /**
	     * Remove key
	     *
	     * @param {String} key - Key that needs to be removed
	     * @return {undefined}
	     */

	  }, {
	    key: 'removeItem',
	    value: function removeItem(key) {
	      delete this[key];
	    }

	    /**
	     * Increase the key value by one
	     *
	     * @param {String} key - Key that needs to be increased
	     * @return {undefined}
	     */

	  }, {
	    key: 'increaseItem',
	    value: function increaseItem(key) {
	      this[key]++;
	    }

	    /**
	     * Decrease the key value by one
	     *
	     * @param {String} key - Key that needs to be decreased
	     * @return {undefined}
	     */

	  }, {
	    key: 'decreaseItem',
	    value: function decreaseItem(key) {
	      this[key]--;
	    }
	  }]);

	  return KeysStore;
	}(), (_applyDecoratedDescriptor(_class.prototype, '_initData', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, '_initData'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setItem', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setItem'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'increaseItem', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'increaseItem'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'decreaseItem', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'decreaseItem'), _class.prototype)), _class);
		exports.default = KeysStore;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("mobx");

/***/ }
/******/ ]);
//# sourceMappingURL=KeysStore.js.map