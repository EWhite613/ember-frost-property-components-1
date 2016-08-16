import Ember from 'ember'

export function getTimeZone ([date]/*, hash*/) {
  return date.toString().match(/\(([A-Za-z\s].*)\)/)[1]
}

export default Ember.Helper.helper(getTimeZone)
