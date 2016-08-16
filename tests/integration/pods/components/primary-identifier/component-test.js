import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('primary-identifier', 'Integration | Component | primary identifier', {
  integration: true
})

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{primary-identifier}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#primary-identifier}}
      template block text
    {{/primary-identifier}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
