import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('play', function() {
    this.route('video', {
      path: ':id',
    });
  });
});

export default Router;
