/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  isDateObject
} from 'ember-frost-property-components/helpers/is-date-object';

describe('IsDateObjectHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = isDateObject(42);
    expect(result).to.be.ok;
  });
});
