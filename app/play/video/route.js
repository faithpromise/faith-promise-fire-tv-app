import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.transitionTo('index');
  },
  actions: {
    videoEnded() {
        this.transitionTo('index');
    },
  },
});
