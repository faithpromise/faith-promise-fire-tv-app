import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    showSeries(series) {
      this.transitionToRoute('series', series);
    },
  },
});
