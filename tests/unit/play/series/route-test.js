import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | play/series', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:play/series');
    assert.ok(route);
  });
});
