import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const data = this.modelFor('application');
    const seriesList = data.content.series;
    return seriesList.findBy('id', params.series_id);
  },
});
