import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('unlabeled-property', 'Integration | Component | unlabeled property', {
  integration: true
})

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{unlabeled-property}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#unlabeled-property}}
      template block text
    {{/unlabeled-property}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
