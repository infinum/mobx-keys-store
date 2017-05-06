# mobx-keys-store

[![Greenkeeper badge](https://badges.greenkeeper.io/infinum/mobx-keys-store.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/infinum/mobx-keys-store.svg?branch=master)](https://travis-ci.org/infinum/mobx-keys-store)
[![Dependency Status](https://david-dm.org/infinum/mobx-keys-store.svg)](https://david-dm.org/infinum/mobx-keys-store)
[![devDependency Status](https://david-dm.org/infinum/mobx-keys-store/dev-status.svg)](https://david-dm.org/infinum/mobx-keys-store#info=devDependencies)

## Installation

```bash
npm install mobx-keys-store
```

## Usage

```javascript
import KeysStore from 'mobx-keys-store';

const initialState = {};
const store = new KeysStore(initialState);

/*
 * Observe the store and its properties
 */

store.setItem('foo', 1);
store.increaseItem('foo');
```

## Documentation

### Constructor
The constructor can receive an object with initial keys.

### Store methods

#### setItem(name, value)
setItem adds a new or updates an existing property.

#### removeItem(name)
removeItem removes a property from the store.

#### increaseItem(name, [amount=1])
increaseItem will increase the value of the selected property.

#### decreaseItem(name, [amount=1])
decreaseItem will decrease the value of the selected property

## Note

If you try to observe a property which doesn't yet exist, you might not be notified once the property is added. That's why it might be best to add the property to the initial store values.

## License

The MIT License

![](https://assets.infinum.co/assets/brand-logo-9e079bfa1875e17c8c1f71d1fee49cf0.svg) © 2016 Infinum Inc.
