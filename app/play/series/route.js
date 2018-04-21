import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const data = this.modelFor('application');
    const seriesList = data.series;
    return seriesList.findBy('id', params.series_id);
  },

  getNextEpisodeInSeries(episode) {
    const series = this.currentModel;
    const episodes = series.episodes;
    const numberOfEpisodes = episodes.length;
    let episodeIndex = episodes.indexOf(episode);
    if (episodeIndex++ === numberOfEpisodes) {
      return null;
    }
    return episodes[episodeIndex];
  },

  actions: {
    videoEnded(episode) {
      const nextEpisode = this.getNextEpisodeInSeries(episode);
      if (nextEpisode) {
        this.transitionTo('play.series.episode', nextEpisode);
      } else {
        this.transitionTo('index');
      }
    },
  },
});
