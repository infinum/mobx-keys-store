/* global describe, it */

import {expect} from 'chai';

import {autorun} from 'mobx';

import KeysStore from '../src/KeysStore';

describe('KeysStore', function() {
  it('should initialize', function() {
    const store = new KeysStore();

    expect(store).to.be.an('object');
  });
});
