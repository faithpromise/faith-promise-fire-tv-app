'use strict';

define('faith-promise-fire-tv-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/route.js should pass ESLint\n\n');
  });

  QUnit.test('components/app-header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/app-header/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/home-screen/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/home-screen/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/live-stream-button/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/live-stream-button/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/series-carousel/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/series-carousel/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/series-screen/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/series-screen/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/series-screen/episode/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/series-screen/episode/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/thumbnail-image/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/thumbnail-image/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/video-player/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/video-player/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/video-player/info-display/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/video-player/info-display/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/video-player/next-video-countdown/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/video-player/next-video-countdown/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/video-player/video/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/video-player/video/component.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/add.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/add.js should pass ESLint\n\n');
  });

  QUnit.test('home-screen/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'home-screen/service.js should pass ESLint\n\n');
  });

  QUnit.test('index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'index/controller.js should pass ESLint\n\n');
  });

  QUnit.test('index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'index/route.js should pass ESLint\n\n');
  });

  QUnit.test('initializers/object-next-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/object-next-item.js should pass ESLint\n\n');
  });

  QUnit.test('play/live/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'play/live/route.js should pass ESLint\n\n');
  });

  QUnit.test('play/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'play/route.js should pass ESLint\n\n');
  });

  QUnit.test('play/series/episode/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'play/series/episode/controller.js should pass ESLint\n\n');
  });

  QUnit.test('play/series/episode/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'play/series/episode/route.js should pass ESLint\n\n');
  });

  QUnit.test('play/series/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'play/series/route.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('series/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'series/controller.js should pass ESLint\n\n');
  });

  QUnit.test('series/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'series/route.js should pass ESLint\n\n');
  });
});
define('faith-promise-fire-tv-app/tests/helpers/ember-keyboard/register-test-helpers', ['exports', 'ember-keyboard', 'ember-keyboard/fixtures/modifiers-array', 'ember-keyboard/fixtures/mouse-buttons-array', 'ember-keyboard/utils/get-cmd-key'], function (exports, _emberKeyboard, _modifiersArray, _mouseButtonsArray, _getCmdKey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    Ember.Test.registerAsyncHelper('keyDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keydown', element);
    });

    Ember.Test.registerAsyncHelper('keyUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keyup', element);
    });

    Ember.Test.registerAsyncHelper('keyPress', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keypress', element);
    });

    Ember.Test.registerAsyncHelper('mouseDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'mousedown', element);
    });

    Ember.Test.registerAsyncHelper('mouseUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'mouseup', element);
    });

    Ember.Test.registerAsyncHelper('touchStart', function (app, attributes, element) {
      return keyEvent(app, attributes, 'touchstart', element);
    });

    Ember.Test.registerAsyncHelper('touchEnd', function (app, attributes, element) {
      return keyEvent(app, attributes, 'touchend', element);
    });
  };

  const keyEvent = function keyEvent(app, attributes, type, element) {
    const event = (attributes || '').split('+').reduce((event, attribute) => {
      if (_modifiersArray.default.indexOf(attribute) > -1) {
        attribute = attribute === 'cmd' ? (0, _getCmdKey.default)() : attribute;
        event[`${attribute}Key`] = true;
      } else if (_mouseButtonsArray.default.indexOf(attribute) > -1) {
        event.button = (0, _emberKeyboard.getMouseCode)(attribute);
      } else {
        event.keyCode = (0, _emberKeyboard.getKeyCode)(attribute);
      }

      return event;
    }, {});

    return app.testHelpers.triggerEvent(element || document.body, type, event);
  };
});
define('faith-promise-fire-tv-app/tests/integration/components/app-header/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | app-header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ThITRgmk",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"app-header\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "3GTSp1mS",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"app-header\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('faith-promise-fire-tv-app/tests/integration/components/home-screen/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | home-screen', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "sokBa8Sk",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"home-screen\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');
    });
  });
});
define('faith-promise-fire-tv-app/tests/integration/components/live-stream-button/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | live-stream-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "YGg3nwyg",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"live-stream-button\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');
    });
  });
});
define('faith-promise-fire-tv-app/tests/integration/components/series-carousel/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | series-carousel', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "tdxIvW10",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"series-carousel\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');
    });
  });
});
define('faith-promise-fire-tv-app/tests/integration/components/series-screen/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | series-screen', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "SKBmm38Q",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"series-screen\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "3w3TvErm",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"series-screen\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('faith-promise-fire-tv-app/tests/integration/components/series-screen/episode/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | series-screen/episode', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "qnzfB+kR",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"series-screen/episode\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "IG5jtJ+b",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"series-screen/episode\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('faith-promise-fire-tv-app/tests/integration/components/thumbnail-image/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | thumbnail image', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "296u7fbj",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"thumbnail-image\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');
    });
  });
});
define('faith-promise-fire-tv-app/tests/integration/components/video-player/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | video-player', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ptq9s9ti",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"video-player\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "inYmbIJu",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"video-player\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('faith-promise-fire-tv-app/tests/integration/components/video-player/info-display/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | video-player/info-display', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Irw9hWyM",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"video-player/info-display\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');
    });
  });
});
define('faith-promise-fire-tv-app/tests/integration/components/video-player/next-video-countdown/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | video-player/next-video-countdown', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "2mXIqr1d",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"video-player/next-video-countdown\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "P15/K0m+",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"video-player/next-video-countdown\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('faith-promise-fire-tv-app/tests/integration/components/video-player/video/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | video-player/video', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "68YSPcBa",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"video-player/video\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "SuigNwEV",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"video-player/video\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('faith-promise-fire-tv-app/tests/integration/helpers/add-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Helper | add', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('shows added value', async function (assert) {
      this.set('inputValue', '1234');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "w5Z3a6oo",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"add\",[[20,[\"inputValue\"]],2],null],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '1235');
    });
  });
});
define('faith-promise-fire-tv-app/tests/test-helper', ['faith-promise-fire-tv-app/app', 'faith-promise-fire-tv-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('faith-promise-fire-tv-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/app-header/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/app-header/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/home-screen/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/home-screen/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/live-stream-button/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/live-stream-button/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/series-carousel/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/series-carousel/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/series-screen/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/series-screen/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/series-screen/episode/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/series-screen/episode/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/thumbnail-image/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/thumbnail-image/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/video-player/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/video-player/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/video-player/info-display/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/video-player/info-display/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/video-player/next-video-countdown/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/video-player/next-video-countdown/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/video-player/video/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/video-player/video/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/add-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/add-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/home-screen/service-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/home-screen/service-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/index/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/index/controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/index/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/initializers/array-next-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/array-next-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/play/live/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/play/live/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/play/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/play/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/play/series/episode/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/play/series/episode/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/play/series/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/play/series/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/series/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/series/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/shoveler/service-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/shoveler/service-test.js should pass ESLint\n\n');
  });
});
define('faith-promise-fire-tv-app/tests/unit/home-screen/service-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | home-screen', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:home-screen');
      assert.ok(service);
    });
  });
});
define('faith-promise-fire-tv-app/tests/unit/index/controller-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define('faith-promise-fire-tv-app/tests/unit/index/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('faith-promise-fire-tv-app/tests/unit/initializers/array-next-item-test', ['faith-promise-fire-tv-app/initializers/array-next-item', 'qunit', 'ember-qunit', 'faith-promise-fire-tv-app/tests/helpers/destroy-app'], function (_arrayNextItem, _qunit, _emberQunit, _destroyApp) {
  'use strict';

  (0, _qunit.module)('Unit | Initializer | array-next-item', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    hooks.beforeEach(function () {
      this.TestApplication = Ember.Application.extend();
      this.TestApplication.initializer({
        name: 'initializer under test',
        initialize: _arrayNextItem.initialize
      });

      this.application = this.TestApplication.create({ autoboot: false });
    });

    hooks.afterEach(function () {
      (0, _destroyApp.default)(this.application);
    });

    // Replace this with your real tests.
    (0, _qunit.test)('it works', async function (assert) {
      await this.application.boot();

      assert.ok(true);
    });
  });
});
define('faith-promise-fire-tv-app/tests/unit/play/live/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | play/live', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:play/live');
      assert.ok(route);
    });
  });
});
define('faith-promise-fire-tv-app/tests/unit/play/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | play', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:play');
      assert.ok(route);
    });
  });
});
define('faith-promise-fire-tv-app/tests/unit/play/series/episode/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | play/series/episode', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:play/series/episode');
      assert.ok(route);
    });
  });
});
define('faith-promise-fire-tv-app/tests/unit/play/series/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | play/series', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:play/series');
      assert.ok(route);
    });
  });
});
define('faith-promise-fire-tv-app/tests/unit/series/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | series', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:series');
      assert.ok(route);
    });
  });
});
define('faith-promise-fire-tv-app/tests/unit/shoveler/service-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | shoveler', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:shoveler');
      assert.ok(service);
    });
  });
});
define('faith-promise-fire-tv-app/config/environment', [], function() {
  var prefix = 'faith-promise-fire-tv-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('faith-promise-fire-tv-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
