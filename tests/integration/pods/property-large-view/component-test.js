/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'property-large-view',
  'Integration: PropertyLargeViewComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#property-large-view}}
      //     template content
      //   {{/property-large-view}}
      // `);

      this.render(hbs`{{property-large-view}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
