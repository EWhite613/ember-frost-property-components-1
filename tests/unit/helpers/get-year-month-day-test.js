/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  getYearMonthDay
} from 'ember-frost-property-components/helpers/get-year-month-day';

describe('GetYearMonthDayHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = getYearMonthDay(42);
    expect(result).to.be.ok;
  });
});
