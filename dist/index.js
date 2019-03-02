"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var KeysStore = /** @class */ (function () {
    /**
     * Initialize the store
     *
     * @param {IDictionary} [initialState={}] - The initial store state
     * @return {IKeysStoreInstance} Store instance
     */
    function KeysStore(initialState) {
        if (initialState === void 0) { initialState = {}; }
        mobx_1.extendObservable(this, initialState);
    }
    /**
     * Set a key
     *
     * @param {String} key - Key that needs to be saved
     * @param {any} value - Value to be saved
     * @return {undefined}
     */
    KeysStore.prototype.setItem = function (key, value) {
        var _a;
        mobx_1.extendObservable(this, (_a = {},
            _a[key] = value,
            _a));
    };
    /**
     * Get a key
     *
     * @param {String} key - Key that needs to be returned
     * @return {any}
     */
    KeysStore.prototype.getItem = function (key) {
        return this[key];
    };
    /**
     * Remove key
     *
     * @param {String} key - Key that needs to be removed
     * @return {undefined}
     */
    KeysStore.prototype.removeItem = function (key) {
        delete this[key];
    };
    /**
     * Increase the key value by one
     *
     * @param {String} key - Key that needs to be increased
     * @param {Number} amount - The amount that should be used to increase the value
     * @return {undefined}
     */
    KeysStore.prototype.increaseItem = function (key, amount) {
        if (amount === void 0) { amount = 1; }
        this[key] += amount;
    };
    /**
     * Decrease the key value by one
     *
     * @param {String} key - Key that needs to be decreased
     * @param {Number} amount - The amount that should be used to decrease the value
     * @return {undefined}
     */
    KeysStore.prototype.decreaseItem = function (key, amount) {
        if (amount === void 0) { amount = 1; }
        this[key] -= amount;
    };
    __decorate([
        mobx_1.action
    ], KeysStore.prototype, "setItem", null);
    __decorate([
        mobx_1.action
    ], KeysStore.prototype, "increaseItem", null);
    __decorate([
        mobx_1.action
    ], KeysStore.prototype, "decreaseItem", null);
    return KeysStore;
}());
exports.default = KeysStore;
