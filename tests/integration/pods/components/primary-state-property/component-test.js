import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('primary-state-property', 'Integration | Component | primary state property', {
  integration: true
})

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{primary-state-property}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#primary-state-property}}
      template block text
    {{/primary-state-property}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
