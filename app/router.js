import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('play', function() {
    this.route('series', {
      path: 'series/:series_id',
    }, function() {
      this.route('episode', {
        path: 'epsiode/:episode_id',
      });
    });
    this.route('live');
  });
  this.route('series', {
    path: 'series/:series_id',
  });
});

export default Router;
