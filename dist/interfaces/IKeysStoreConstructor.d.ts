import IDictionary from './IDictionary';
import IKeysStoreInstance from './IKeysStoreInstance';
interface IKeysStoreConstructor {
    /**
     * Initialize the store
     *
     * @param {IDictionary} [initialState={}] - The initial store state
     * @return {Object} Store instance
     */
    new (initialState?: IDictionary): IKeysStoreInstance;
}
export default IKeysStoreConstructor;
