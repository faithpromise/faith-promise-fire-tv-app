import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const series = this.modelFor('play.series');
    return series.episodes.findBy('id', params.episode_id);
  },
});
