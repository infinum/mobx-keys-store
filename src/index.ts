import {action, extendObservable} from 'mobx';

import IDictionary from './interfaces/IDictionary';
import IKeysStoreConstructor from './interfaces/IKeysStoreConstructor';
import IKeysStoreInstance from './interfaces/IKeysStoreInstance';

class KeysStore implements IKeysStoreInstance {

  /**
   * Initialize the store
   *
   * @param {IDictionary} [initialState={}] - The initial store state
   * @return {IKeysStoreInstance} Store instance
   */
  constructor(initialState: IDictionary = {}) {
    extendObservable(this, initialState);
  }

  /**
   * Set a key
   *
   * @param {String} key - Key that needs to be saved
   * @param {any} value - Value to be saved
   * @return {undefined}
   */
  @action public setItem(key: string, value: any): void {
    extendObservable(this, {
      [key]: value,
    });
  }

  /**
   * Get a key
   *
   * @param {String} key - Key that needs to be returned
   * @return {any}
   */
  public getItem(key: string): any {
    return this[key];
  }

  /**
   * Remove key
   *
   * @param {String} key - Key that needs to be removed
   * @return {undefined}
   */
  public removeItem(key: string): void {
    delete this[key];
  }

  /**
   * Increase the key value by one
   *
   * @param {String} key - Key that needs to be increased
   * @param {Number} amount - The amount that should be used to increase the value
   * @return {undefined}
   */
  @action public increaseItem(key: string, amount: number = 1): void {
    this[key] += amount;
  }

  /**
   * Decrease the key value by one
   *
   * @param {String} key - Key that needs to be decreased
   * @param {Number} amount - The amount that should be used to decrease the value
   * @return {undefined}
   */
  @action public decreaseItem(key: string, amount: number = 1): void {
    this[key] -= amount;
  }
}

export default KeysStore as IKeysStoreConstructor;

export {
  IDictionary,
  IKeysStoreConstructor,
  IKeysStoreInstance,
};
