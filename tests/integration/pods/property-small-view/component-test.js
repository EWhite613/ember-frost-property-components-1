/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'property-small-view',
  'Integration: PropertySmallViewComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#property-small-view}}
      //     template content
      //   {{/property-small-view}}
      // `);

      this.render(hbs`{{property-small-view}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
