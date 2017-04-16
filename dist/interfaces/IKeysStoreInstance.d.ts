import IDictionary from './IDictionary';
interface IKeysStoreInstance extends IDictionary {
    /**
     * Set a key
     *
     * @param {String} key - Key that needs to be saved
     * @param {any} value - Value to be saved
     * @return {undefined}
     */
    setItem(key: string, value: any): any;
    /**
     * Get a key
     *
     * @param {String} key - Key that needs to be returned
     * @return {any}
     */
    getItem(key: string): any;
    /**
     * Remove key
     *
     * @param {String} key - Key that needs to be removed
     * @return {undefined}
     */
    removeItem(key: string): void;
    /**
     * Increase the key value by one
     *
     * @param {String} key - Key that needs to be increased
     * @param {Number} amount - The amount that should be used to increase the value
     * @return {undefined}
     */
    increaseItem(key: string, amount?: number): void;
    /**
     * Decrease the key value by one
     *
     * @param {String} key - Key that needs to be decreased
     * @param {Number} amount - The amount that should be used to decrease the value
     * @return {undefined}
     */
    decreaseItem(key: string, amount?: number): void;
}
export default IKeysStoreInstance;
