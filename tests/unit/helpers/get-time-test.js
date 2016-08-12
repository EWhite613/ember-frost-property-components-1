/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  getTime
} from 'ember-frost-property-components/helpers/get-time';

describe('GetTimeHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = getTime(42);
    expect(result).to.be.ok;
  });
});
