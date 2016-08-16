import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('secondary-identifier', 'Integration | Component | secondary identifier', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{secondary-identifier}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#secondary-identifier}}
      template block text
    {{/secondary-identifier}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
