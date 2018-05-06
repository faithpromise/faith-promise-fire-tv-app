import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | add', function(hooks) {
  setupRenderingTest(hooks);

  test('shows added value', async function(assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{add inputValue 2}}`);

    assert.equal(this.element.textContent.trim(), '1235');
  });
});
