/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'large-icon-text-property',
  'Integration: LargeIconTextPropertyComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#large-icon-text-property}}
      //     template content
      //   {{/large-icon-text-property}}
      // `);

      this.render(hbs`{{large-icon-text-property}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
