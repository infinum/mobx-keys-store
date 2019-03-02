import IDictionary from './IDictionary';
import IKeysStoreInstance from './IKeysStoreInstance';

type IKeysStoreConstructor = new(initialState?: IDictionary) => IKeysStoreInstance;

export default IKeysStoreConstructor;
