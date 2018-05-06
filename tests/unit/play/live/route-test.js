import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | play/live', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:play/live');
    assert.ok(route);
  });
});
