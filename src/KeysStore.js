import {action, extendObservable} from 'mobx';

export default class KeysStore {

  /**
   * Initialize the store
   *
   * @param {Object} initialState - The initial store state
   * @return {Object} Store instance
   */
  constructor(initialState) {
    this._initData(initialState);
  }

  /**
   * Method for setting the initial state of the model
   *
   * @private
   * @param {Object} [initialState={}] - Initial state that should be set
   */
  @action _initData(initialState = {}) {
    extendObservable(this, initialState);
  }

  /**
   * Set a key
   *
   * @param {String} key - Key that needs to be saved
   * @param {Mixed} value - Value to be saved
   * @return {undefined}
   */
  @action setItem(key, value) {
    extendObservable(this, {
      [key]: value
    });
  }

  /**
   * Remove key
   *
   * @param {String} key - Key that needs to be removed
   * @return {undefined}
   */
  removeItem(key) {
    delete this[key];
  }

  /**
   * Increase the key value by one
   *
   * @param {String} key - Key that needs to be increased
   * @param {Number} amount - The amount that should be used to increase the value
   * @return {undefined}
   */
  @action increaseItem(key, amount = 1) {
    this[key] += amount;
  }

  /**
   * Decrease the key value by one
   *
   * @param {String} key - Key that needs to be decreased
   * @param {Number} amount - The amount that should be used to decrease the value
   * @return {undefined}
   */
  @action decreaseItem(key, amount = 1) {
    this[key] -= amount;
  }
}
