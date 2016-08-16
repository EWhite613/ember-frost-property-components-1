import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  // Todo color -> background-color variables available in ember-frost-core
  layout,
  severity: Ember.computed('state', function (){
    switch (this.get('state')){
      case 'Critical':
        return 'critical'
      case 'Major':
        return 'major'
      case 'Warn':
        return 'warn'
      default:
        return 'neutral'
    }
  })
});
