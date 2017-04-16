// tslint:disable:max-classes-per-file
// tslint:disable:no-string-literal

import {autorun, useStrict} from 'mobx';
useStrict(true);

import {expect} from 'chai';

import KeysStore from '../src';

describe('KeysStore', function() {
  it('should initialize', function() {
    const store = new KeysStore();

    expect(store).to.be.an('object');
  });

  it('should initialize with default values', function() {
    const store = new KeysStore({
      foo: 1,
      bar: 'baz'
    });

    expect(store.getItem('foo')).to.equal(1);
    expect(store.bar).to.equal('baz');
    expect(store.baz).to.be.an('undefined');
  });

  it('should trigger autorun on change', function(done) {
    const store = new KeysStore({foo: 1});
    let foo = 1;

    autorun(function() {
      expect(store.foo).to.equal(foo);

      if (foo === 2) {
        done();
      }
    });

    foo++;
    store.increaseItem('foo');
  });

  it('should set/remove the values correctly', function() {
    const store = new KeysStore({foo: 1});

    expect(store.foo).to.equal(1);
    expect(store.baz).to.be.an('undefined');

    store.setItem('foo', 'a');
    expect(store.foo).to.equal('a');
    expect(store.baz).to.be.an('undefined');

    store.setItem('baz', 3);
    expect(store.foo).to.equal('a');
    expect(store.baz).to.equal(3);

    store.removeItem('foo');
    expect(store.foo).to.be.an('undefined');
    expect(store.baz).to.equal(3);
  });

  it('should increase/decrease the values correctly', function() {
    const store = new KeysStore({foo: 1});

    expect(store.foo).to.equal(1);

    store.increaseItem('foo');
    expect(store.foo).to.equal(2);

    store.increaseItem('foo', 3);
    expect(store.foo).to.equal(5);

    store.decreaseItem('foo', 2);
    expect(store.foo).to.equal(3);

    store.decreaseItem('foo');
    expect(store.foo).to.equal(2);
  });
});
