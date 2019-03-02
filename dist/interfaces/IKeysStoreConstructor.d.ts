import IDictionary from './IDictionary';
import IKeysStoreInstance from './IKeysStoreInstance';
declare type IKeysStoreConstructor = new (initialState?: IDictionary) => IKeysStoreInstance;
export default IKeysStoreConstructor;
