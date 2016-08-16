import Ember from 'ember'

export function isDateObject ([date]/*, hash*/) {
  return Object.prototype.toString.call(date) === '[object Date]'
}

export default Ember.Helper.helper(isDateObject)
