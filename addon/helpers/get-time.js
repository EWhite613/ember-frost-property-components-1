import Ember from 'ember';

export function getTime([date]/*, hash*/) {
  return date.getHours() +':' + date.getMinutes() + ':' + date.getSeconds()
}

export default Ember.Helper.helper(getTime);
