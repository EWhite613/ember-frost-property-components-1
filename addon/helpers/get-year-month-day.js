import Ember from 'ember';

export function getYearMonthDay([date]/*, hash*/) {
  return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
}

export default Ember.Helper.helper(getYearMonthDay);
