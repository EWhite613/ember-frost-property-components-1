/* jshint expr:true */
import { expect } from 'chai'
import {
  describe,
  it
} from 'mocha'
import {
  getTimeZone
} from 'ember-frost-property-components/helpers/get-time-zone'

describe('GetTimeZoneHelper', function () {
  // Replace this with your real tests.
  it('works', function () {
    let result = getTimeZone(42)
    expect(result).to.be.ok
  })
})
