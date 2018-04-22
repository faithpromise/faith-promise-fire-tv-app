import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    nextEpisodeId: {
      replace: true
    },
  },

  model(params) {
    const series = this.modelFor('play.series');
    return series.episodes.findBy('id', params.episode_id);
  },

  setupController(controller) {
    this._super(...arguments);
    const nextEpisode = this.getNextEpisodeInSeries(this.currentModel);
    if (!nextEpisode) {
      controller.setProperties({
        nextEpisodeId: null,
        nextEpisode: null,
      });
      return;
    }
    controller.setProperties({
      nextEpisodeId: nextEpisode.id,
      nextEpisode,
    });
  },

  getNextEpisodeInSeries(episode) {
    const episodes = this.modelFor('play.series').episodes;
    const numberOfEpisodes = episodes.length;
    let episodeIndex = episodes.indexOf(episode);
    if (episodeIndex++ === numberOfEpisodes) {
      return null;
    }
    return episodes[episodeIndex];
  },

  actions: {
    videoEnded() {
      const nextEpisode = this.controller.get('nextEpisodeId');
      if (nextEpisode) {
        this.transitionTo('play.series.episode', nextEpisode);
      } else {
        this.transitionTo('index');
      }
    },
  },
});
